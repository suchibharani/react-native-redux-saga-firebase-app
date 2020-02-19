// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';
// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';
// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
//import defaultState
import initState from '../reducers/initialState';

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(
    sagaMiddleware,
    // createLogger(),
  ),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {
  store,
}