import { put, takeEvery } from 'redux-saga/effects';

import { setInstructions, setInstrctError } from '../actions';
import { DATAFETCH } from '../constants/actionTypes';
import data from '../data/data.json';

export function* handleInstructionsLoad() {

    try { 
        yield put(setInstructions(data));
    } catch (error) {
        console.log("Oops! Something went wrong please try again.")
    }
}

export function* watchInstructionLoad() {
    yield takeEvery(DATAFETCH.DATA_LOAD, handleInstructionsLoad);
}
