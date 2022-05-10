import {loadOptions} from '@babel/core';
import {put, call, all, takeLatest} from 'redux-saga/effects';

import {setWeatcher} from './weatcher-actions';
import {weatcherTypes} from './weatcher-types';

function* watcher() {
  console.log('run saga');
}

export default watcher;
