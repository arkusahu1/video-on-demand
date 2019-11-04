/* istanbul ignore file */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

export default (initialState, sagaRunner) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(sagaRunner);
  return store;
};
