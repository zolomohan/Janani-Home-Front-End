import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { POST } from 'actions/types';
import header from 'helpers/ajaxHeaders';

export const getComments = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/comment`)
    .then((res) => dispatch({ type: POST.COMMENT.LIST, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addComment = (id, comment) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/comment/`, JSON.stringify(comment), header.auth())
    .then((res) => dispatch({ type: POST.COMMENT.ADD, payload: res.data }))
    .catch((err) => console.log(err));
};

export const disableComment = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/disablecomment/`, JSON.stringify({ id }), header.auth())
    .then(() => dispatch({ type: POST.COMMENT.DISABLE, payload: id }))
    .catch((err) => console.log(err));
};
