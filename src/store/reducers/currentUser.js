import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOG_OUT,
  SET_USER
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
    case CREATE_USER_PENDING:
      return { ...state, isPending: true };
    case CREATE_USER_SUCCESS:
      return { ...state, user: action.payload, isPending: false };
    case CREATE_USER_FAIL:
      return { ...state, error: action.payload, isPending: false };
    case LOG_OUT:
      return { ...state, user: {} };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};