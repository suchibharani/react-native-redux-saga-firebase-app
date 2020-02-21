import { QUOTES } from '../constants/actionTypes';

//actions for companies
export const loadQuotes = () => ({
  type: QUOTES.QUOTES_LOAD,
});

export const setQuotes = quotes => ({
  type: QUOTES.QUOTES_AVAILABLE,
  quotes,
});

export const addQuote = (quote) => ({
  type: QUOTES.ADD_QUOTE,
  data: {quote}
});

export const setQuotesError = error => ({
  type: QUOTES.QUOTES_LOAD_FAIL,
  error,
});