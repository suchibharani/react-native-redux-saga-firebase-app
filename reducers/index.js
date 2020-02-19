// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import counter from './counterReducer';
import instructions from './instructReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  counter,
  instructions
});
// Exports
export default rootReducer;