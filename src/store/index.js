import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {weatcherReducer} from './weatcher/weatcher-reducers';
import watcher from './weatcher/weatcher-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(weatcherReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcher);

export default store;
