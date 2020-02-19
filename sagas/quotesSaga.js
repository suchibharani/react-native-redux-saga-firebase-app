import { put, takeEvery } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import { setQuotes } from '../actions';
import { QUOTES } from '../constants/actionTypes';
import { getQuotesAsyncStorage } from '../apis/api';


export function* handleQuotesLoad() {
    // let quotesFunc = getQuotesAsyncStorage();
    try{
        let quotes = yield getQuotesAsyncStorage();
        let finalData = JSON.parse(quotes);
        console.log(finalData);
        yield put(setQuotes(finalData));
    }catch(err){
        console.log("error :(")
    }
    
}

export function* watchQuotesLoad() {
    yield takeEvery(QUOTES.QUOTES_LOAD, handleQuotesLoad);
}
