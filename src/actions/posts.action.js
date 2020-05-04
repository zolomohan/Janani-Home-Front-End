import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { GET_POSTS, POST_ADDED } from './types';

export const getPosts = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts`)
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addPost = (post) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/posts/`, JSON.stringify(post), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) =>
      dispatch({
        type: POST_ADDED,
        payload: res.data,
      })
    ).catch((err) => console.log(err));
};
