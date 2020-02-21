import { put, takeEvery } from 'redux-saga/effects';

import { setQuotes } from '../actions';
import { QUOTES } from '../constants/actionTypes';
import { getQuotesAsyncStorage } from '../apis/api';


export function* handleQuotesAdd() {
    try{
        let quotes = yield getQuotesAsyncStorage();
        let finalData = JSON.parse(quotes);
        console.log(finalData);
        yield put(setQuotes(finalData));
    }catch(err){
        console.log("error :(")
    }
}

export function* watchQuotesAdd() {
    yield takeEvery(QUOTES.QUOTES_LOAD, handleQuotesAdd);
}
