import {
  AUTH_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  PROFILE,
} from 'actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  profileDoesNotExist: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case AUTH_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        user: null,
        token: null,
        isAuthenticated: false,
      };

    case PROFILE.GET:
      return {
        ...state,
        user: {
          ...action.payload,
          ...state.user,
        },
        profileDoesNotExist: false
      }

    case PROFILE.PROFILE404:
      return {
        ...state,
        profileDoesNotExist: true
      }

    default:
      return state;
  }
};
