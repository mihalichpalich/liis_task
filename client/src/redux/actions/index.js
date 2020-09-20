import {
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    MAKE_FAVOURITE,
    MAKE_UNFAVOURITE,
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAILURE
} from "../types";

export const loadRequest = () => {
    return {
        type: LOAD_REQUEST
    }
};
export const loadSuccess = (data) => {
    return {
        type: LOAD_SUCCESS,
        payload: {data}
    }
};
export const loadFailure = () => {
    return {
        type: LOAD_FAILURE
    }
};

export const addToFavourites = (flight) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: flight
    }
};
export const removeFromFavourites = (flight) => {
    return {
        type: REMOVE_FROM_FAVOURITES,
        payload: flight
    }
};
export const makeFavourite = (flight) => {
    return {
        type: MAKE_FAVOURITE,
        payload: flight
    }
};
export const makeUnfavourite = (flight) => {
    return {
        type: MAKE_UNFAVOURITE,
        payload: flight
    }
};