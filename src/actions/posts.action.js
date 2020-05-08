import axios from 'axios';
import { SERVER_URL } from 'config/server';
import header from 'helpers/ajaxHeaders';
import {
  GET_POST,
  GET_POSTLIST,
  POST_ADDED,
  POST_TOGGLED,
  POST_LIKED,
  POST_DISLIKED,
  POST_REMOVELIKE,
  POST_REMOVEDISLIKE,
  GET_LIKESTATUS,
  GET_LIKECOUNT,
} from 'actions/types';

export const getPost = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/`)
    .then((res) => dispatch({ type: GET_POST, payload: res.data }))
    .catch((err) => console.log(err));
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

export const togglePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/toggle/`, null, header.auth())
    .then(() => dispatch({ type: POST_TOGGLED, payload: id }))
    .catch((err) => console.log(err));
};

export const getLikeStatus = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/likestatus/`, header.auth())
    .then((res) => dispatch({ type: GET_LIKESTATUS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const likePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/like/`, null, header.auth())
    .then(() => dispatch({ type: POST_LIKED, payload: id }))
    .catch((err) => console.log(err));
};
export const dislikePost = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/dislike/`, null, header.auth())
    .then(() => dispatch({ type: POST_DISLIKED, payload: id }))
    .catch((err) => console.log(err));
};
export const removeLike = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/removelike/`, null, header.auth())
    .then(() => dispatch({ type: POST_REMOVELIKE, payload: id }))
    .catch((err) => console.log(err));
};

export const removeDislike = (id) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/${id}/removedislike/`, null, header.auth())
    .then(() => dispatch({ type: POST_REMOVEDISLIKE, payload: id }))
    .catch((err) => console.log(err));
};

export const getLikeCount = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts/${id}/likecount/`, header.auth())
    .then((res) => dispatch({ type: GET_LIKECOUNT, payload: res.data }))
    .catch((err) => console.log(err));
};