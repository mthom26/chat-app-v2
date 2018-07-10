import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOG_OUT
} from '../actionTypes';
import { auth } from '../../firebase';

export const login = (data) => (dispatch) => {
  dispatch({ type: GET_USER_PENDING });
  auth.doSignIn(data.email, data.password)
    .then(authUser => {
      dispatch({ type: GET_USER_SUCCESS, payload: authUser });
    })
    .catch(error => {
      dispatch({ type: GET_USER_FAIL, payload: error });
    });
};

export const register = (data) => (dispatch) => {
  dispatch({ type: CREATE_USER_PENDING });
  auth.doCreateUser(data.email, data.password)
    .then(authUser => {
      dispatch({ type: CREATE_USER_SUCCESS, payload: authUser });
    })
    .catch(error => {
      dispatch({ type: CREATE_USER_FAIL, payload: error });
    });
};

export const logout = () => (dispatch) => {
  // TODO Add PENDING, SUCCESS, FAIL handling
  dispatch({ type: LOG_OUT });
  auth.doSignOut();
};