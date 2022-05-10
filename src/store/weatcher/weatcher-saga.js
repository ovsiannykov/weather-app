import {put, call, all, takeLatest} from 'redux-saga/effects';

import {setWeatcher} from './weatcher-actions';
import {fetchData} from '../../api';

function* watcher() {
  const data = fetchData();
  yield put(setWeatcher(data));
}

export default watcher;
