import { QUOTES } from '../constants/actionTypes';
// Initial State
import initialState from './initialState';

  // Redux: Quotes Reducer
  const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUOTES.QUOTES_AVAILABLE :
          return [
            ...state,
            ...action.quotes
          ];
        default:
            return state;
    }
};
  // Exports
  export default quotesReducer;