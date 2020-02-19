import { DATAFETCH } from '../constants/actionTypes';
// Initial State
import initialState from './initialState';

  // Redux: Counter Reducer
  const instructReducer = (state = initialState, action) => {

    switch (action.type) {
        case DATAFETCH.DATA_LOAD_SUCCESS :
          return {
            ...state,
            instructions : action.instructions.instructions
          };
        default:
            return state;
    }
};
  // Exports
  export default instructReducer;