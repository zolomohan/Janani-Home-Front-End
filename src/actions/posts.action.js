import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { config } from 'helpers/ajaxHeaders';
import { GET_POSTS, POST_ADDED, POST_TOGGLED } from 'actions/types';

export const getPosts = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/`)
    .then((res) => dispatch({ type: GET_POSTS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addPost = (post) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/`, JSON.stringify(post), config)
    .then((res) => dispatch({ type: POST_ADDED, payload: res.data }))
    .catch((err) => console.log(err));
};

export const togglePost = (id, value) => (dispatch) => {
  axios
    .patch(`${SERVER_URL}/api/posts/${id}/`, JSON.stringify({ active: value }), config)
    .then(() => dispatch({ type: POST_TOGGLED, payload: { id, value } }))
    .catch((err) => console.log(err));
};
