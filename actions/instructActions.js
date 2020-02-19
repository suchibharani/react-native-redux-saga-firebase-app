import { DATAFETCH } from '../constants/actionTypes';

//actions for companies
export const loadInstructions = () => ({
  type: DATAFETCH.DATA_LOAD,
});

export const setInstructions = instructions => ({
  type: DATAFETCH.DATA_LOAD_SUCCESS,
  instructions,
});

export const setInstrctError = error => ({
  type: DATAFETCH.DATA_LOAD_FAIL,
  error,
});