import { QUOTES } from '../constants/actionTypes';

//actions for companies
export const loadQuotes = () => ({
  type: QUOTES.QUOTES_LOAD,
});

export const setQuotes = quotes => ({
  type: QUOTES.QUOTES_AVAILABLE,
  quotes,
});

export const setQuotesError = error => ({
  type: QUOTES.QUOTES_LOAD_FAIL,
  error,
});