import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { POST } from 'actions/types';
import header from 'helpers/ajaxHeaders';

export const likePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/like/`, null, header.auth())
    .then(() => dispatch({ type: POST.LIKES.LIKE, payload: id }))
    .catch((err) => console.log(err));
};

export const dislikePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/dislike/`, null, header.auth())
    .then(() => dispatch({ type: POST.LIKES.DISLIKE, payload: id }))
    .catch((err) => console.log(err));
};

export const removeLike = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/removelike/`, null, header.auth())
    .then(() => dispatch({ type: POST.LIKES.REMOVELIKE, payload: id }))
    .catch((err) => console.log(err));
};

export const removeDislike = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/removedislike/`, null, header.auth())
    .then(() => dispatch({ type: POST.LIKES.REMOVEDISLIKE, payload: id }))
    .catch((err) => console.log(err));
};

