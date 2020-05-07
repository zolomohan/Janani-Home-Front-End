import axios from 'axios';
import { SERVER_URL } from 'config/server';
import header from 'helpers/ajaxHeaders';
import { GET_POST, GET_POSTLIST, POST_ADDED, POST_TOGGLED } from 'actions/types';

export const getPost = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/`)
    .then((res) => dispatch({ type: GET_POST, payload: res.data }))
    .catch(err => console.log(err));
};

export const getPostList = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/`)
    .then((res) => dispatch({ type: GET_POSTLIST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addPost = (post) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/`, JSON.stringify(post), header.auth())
    .then((res) => dispatch({ type: POST_ADDED, payload: res.data }))
    .catch((err) => console.log(err));
};

export const togglePost = (id, value) => (dispatch) => {
  axios
    .patch(
      `${SERVER_URL}/api/posts/${id}/`,
      JSON.stringify({ active: value }),
      header.auth()
    )
    .then(() => dispatch({ type: POST_TOGGLED, payload: { id, value } }))
    .catch((err) => console.log(err));
};
