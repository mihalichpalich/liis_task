import {call, put} from 'redux-saga/effects';

import api from "../../api/api";
import {loadSuccess, loadFailure} from "../actions";

export function* load() {
    try {
        const response = yield call(api.get, '/flights');

        yield put(loadSuccess(response.data))
    } catch (e) {
        console.log(e);
        yield put(loadFailure())
    }
}