import {COUNTER} from '../actions/types';

const initialState = {
  count: 0,
};

export const Counter_r = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
