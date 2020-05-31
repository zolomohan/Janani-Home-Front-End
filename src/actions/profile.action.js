import axios from 'axios';
import header from 'helpers/ajaxHeaders';
import { SERVER_URL } from 'config/server';
import { PROFILE } from 'actions/types';

export const getProfile = (id) => (dispatch) => {
  axios
    .get(`${SERVER_URL}/api/profile/${id}`)
    .then((res) => dispatch({ type: PROFILE.GET, payload: res.data }))
    .catch((err) => {
      if (err.response.data.profile === 'Profile Does Not Exist')
        dispatch({ type: PROFILE.PROFILE404 });
      console.log(err.response.data);
    });
};

export const createProfile = (profile) => (dispatch) => {
  axios
    .post(`${SERVER_URL}/api/profile/`, profile, header.auth())
    .then((res) => dispatch({ type: PROFILE.ADD, payload: res.data }))
    .catch((err) => {
      if (err.response.data.profile === 'Profile Does Not Exist')
        dispatch({ type: PROFILE.PROFILE404 });
      console.log(err.response.data);
    });
};
