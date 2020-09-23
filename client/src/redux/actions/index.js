import {
    ADD_TO_FAVOURITES,
    ADD_TO_FAVOURITES_AFTER_FETCHING,
    REMOVE_FROM_FAVOURITES,
    MAKE_FAVOURITE,
    MAKE_UNFAVOURITE,
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAILURE
} from "../types";

export const loadRequest = () => ({type: LOAD_REQUEST});
export const loadSuccess = (data) => ({type: LOAD_SUCCESS, payload: {data}});
export const loadFailure = () => ({type: LOAD_FAILURE});

export const addToFavourites = (flight) => ({type: ADD_TO_FAVOURITES, payload: flight});
export const addToFavouritesAfterFetching = (flights) => ({type: ADD_TO_FAVOURITES_AFTER_FETCHING, payload: flights});
export const removeFromFavourites = (flight) => ({type: REMOVE_FROM_FAVOURITES, payload: flight});
export const makeFavourite = (flight) => ({type: MAKE_FAVOURITE, payload: flight});
export const makeUnfavourite = (flight) => ({type: MAKE_UNFAVOURITE, payload: flight});