import {
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAIL
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