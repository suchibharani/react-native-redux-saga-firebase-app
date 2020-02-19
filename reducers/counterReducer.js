// Initial State
import initialState from './initialState';

  // Redux: Counter Reducer
  const counterReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
      case 'INCREASE_COUNTER_ASYNC': {
        return state + action.value
      }
      case 'DECREASE_COUNTER': {
        return state - action.value
      }
      default: {
        return state;
      }
    }
  };
  // Exports
  export default counterReducer;