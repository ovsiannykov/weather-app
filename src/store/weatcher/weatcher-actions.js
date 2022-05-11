import {weatcherTypes} from './weatcher-types';

export const setWeatcher = payload => ({
  type: weatcherTypes.SET_WEATCHER,
  payload,
});

export const setDataFetching = () => ({
  type: weatcherTypes.SET_DATA,
});
