import {weatcherTypes} from './weatcher-types';

export const setWeatcher = payload => ({
  type: weatcherTypes.SET_WEATCHER,
  data: payload,
});
