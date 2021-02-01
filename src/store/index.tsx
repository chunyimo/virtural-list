import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
