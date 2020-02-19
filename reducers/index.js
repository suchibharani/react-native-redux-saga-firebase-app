// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counter from './counterReducer';
import instructions from './instructReducer';
import quotes from './quotesReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter,
  instructions,
  quotes
});
// Exports
export default rootReducer;