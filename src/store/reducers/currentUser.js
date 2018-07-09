import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAIL
} from '../actionTypes';

const defaultState = {
  isPending: false,
  error: null,
  user: {}
};

export const currentUser = (state = defaultState, action) => {
  switch(action.type) {
    case GET_USER_PENDING:
      return { ...state, isPending: true };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, isPending: false };
    case GET_USER_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};