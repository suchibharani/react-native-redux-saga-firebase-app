// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import { watchIncreaseCounter, watchDecreaseCounter } from './counterSaga';
import { watchInstructionLoad } from './instructionSaga';
import { watchQuotesLoad } from './quotes/loadquotesSaga';

// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
    fork(watchInstructionLoad),
    fork(watchQuotesLoad)
  ]);
};