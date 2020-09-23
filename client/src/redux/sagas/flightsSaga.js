import {call, put, all} from 'redux-saga/effects';

import api from "../../api/api";
import {loadSuccess, loadFailure, addToFavouritesAfterFetching} from "../actions";

export function* load() {
    try {
        const responseAll = yield call(api.get, '/flights');
        const responseFavourites = yield call(api.get, '/flights?favourite=true');

        yield put(loadSuccess(responseAll.data));
        yield put(addToFavouritesAfterFetching(responseFavourites.data));
    } catch (e) {
        console.log(e);
        yield put(loadFailure())
    }
}