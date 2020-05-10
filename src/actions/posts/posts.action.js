import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { POST } from 'actions/types';
import header from 'helpers/ajaxHeaders';

export const getPost = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/`, header.auth())
    .then((res) => dispatch({ type: POST.GET, payload: res.data }))
    .catch((err) => console.log(err));
};

export const getPostList = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/`)
    .then((res) => dispatch({ type: POST.LIST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addPost = (post) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/`, JSON.stringify(post), header.auth())
    .then((res) => dispatch({ type: POST.ADD, payload: res.data }))
    .catch((err) => console.log(err));
};

export const togglePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/toggle/`, null, header.auth())
    .then(() => dispatch({ type: POST.TOGGLE, payload: id }))
    .catch((err) => console.log(err));
};