import axios from 'axios';
import header from 'helpers/ajaxHeaders';
import { SERVER_URL } from 'config/server';
import { AUTH } from 'actions/types';

export const loadUser = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/auth/user`, header.auth())
    .then((res) => dispatch({ type: AUTH.LOADUSER, payload: res.data }))
    .catch(() => dispatch({ type: AUTH.FAIL }));
};

export const loginUser = (credentials) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/auth/login`, JSON.stringify(credentials), header.jsonContent())
    .then((res) => dispatch({ type: AUTH.LOGIN, payload: res.data }))
    .catch(() => dispatch({ type: AUTH.FAIL }));
};

export const registerUser = (credentials) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/auth/register`, JSON.stringify(credentials), header.jsonContent())
    .then((res) => dispatch({ type: AUTH.REGISTER, payload: res.data }))
    .catch(() => dispatch({ type: AUTH.FAIL }));
};

export const logoutUser = () => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/auth/logout`, null, header.auth())
    .then(() => dispatch({ type: AUTH.LOGOUT }))
    .catch((err) => console.log(err));
};
