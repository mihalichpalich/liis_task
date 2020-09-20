import {all, takeLatest} from 'redux-saga/effects';

import {load} from "./flightsSaga";
import {LOAD_REQUEST} from "../types";

export default function* rootSaga() {
    return yield all([
        takeLatest(LOAD_REQUEST, load)
    ])
}