import {weatcherTypes} from './weatcher-types';

const initialState = {
  wetcher: [],
};

export const weatcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case weatcherTypes.SET_WEATCHER:
      return {...state, wetcher: action.payload};

    default:
      return state;
  }
};
