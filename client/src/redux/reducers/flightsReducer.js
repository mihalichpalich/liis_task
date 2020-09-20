import {
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAILURE,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    MAKE_FAVOURITE,
    MAKE_UNFAVOURITE
} from "../types";

const initialState = {
    fetchedFlights: [],
    favouriteFlights: [],
    fetchError: false,
    fetchLoading: false,
};

export const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                fetchedFlights: action.payload.data
            };
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                fetchedFlights: []
            };
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favouriteFlights: [...state.favouriteFlights, action.payload]
            };
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favouriteFlights: state.favouriteFlights.filter((obj) => obj.id !== action.payload.id)
            };
        case MAKE_FAVOURITE:
            return {
                ...state,
                fetchedFlights: state.fetchedFlights.map(item =>
                    item.id === action.payload.id
                        ? { ...item, favourite: true }
                        : item
                )
            };
        case MAKE_UNFAVOURITE:
            return {
                ...state,
                fetchedFlights: state.fetchedFlights.map(item =>
                    item.id === action.payload.id
                        ? { ...item, favourite: false }
                        : item
                )
            };
        default:
            return state
    }
};
