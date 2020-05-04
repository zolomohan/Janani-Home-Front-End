import axios from 'axios';
import { SERVER_URL } from 'config/server';
import { GET_POSTS } from './types';

export const getPosts = () => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/posts`)
    .then((res) => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
