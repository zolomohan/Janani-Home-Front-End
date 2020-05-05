import axios from 'axios';
import { authHeader } from 'helpers/ajaxHeaders';
import { SERVER_URL } from 'config/server';
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_FAIL,
  USER_LOADING,
  USER_LOADED,
  LOGOUT_SUCCESS,
} from 'actions/types';

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(`${SERVER_URL}/api/auth/user`, authHeader(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch(() => dispatch({ type: AUTH_FAIL }));
};

export const loginUser = (credentials) => (dispatch, getState) => {
  axios
    .post(`${SERVER_URL}/api/auth/login`, JSON.stringify({ ...credentials }), authHeader(getState))
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(() => dispatch({ type: AUTH_FAIL }));
};

export const registerUser = (credentials) => (dispatch, getState) => {
  axios
    .post(
      `${SERVER_URL}/api/auth/register`,
      JSON.stringify({ ...credentials }),
      authHeader(getState)
    )
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(() => dispatch({ type: AUTH_FAIL }));
};

export const logoutUser = () => (dispatch, getState) => {
  axios
    .post(`${SERVER_URL}/api/auth/logout`, null, authHeader(getState))
    .then(() => dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => console.log(err));
};
