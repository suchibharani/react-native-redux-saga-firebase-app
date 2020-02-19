import { COUNTER } from '../constants/actionTypes';

//actions for increase / decrease counts


export const reduxIncreaseCounter = (value) => ({
    type: COUNTER.INCREASE_COUNTER,
    value
  });

export const reduxDecreaseCounter = (value) => ({
    type: COUNTER.DECREASE_COUNTER,
    value
});
