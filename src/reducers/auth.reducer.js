import { AUTH, PROFILE } from 'actions/types';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  profileDoesNotExist: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOADUSER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };

    case AUTH.LOGIN:
    case AUTH.REGISTER:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case AUTH.FAIL:
    case AUTH.LOGOUT:
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
        profileDoesNotExist: false,
      };

    case PROFILE.PROFILE404:
      return {
        ...state,
        profileDoesNotExist: true,
      };

    case PROFILE.REVERT404:
      return {
        ...state,
        profileDoesNotExist: false
      }

    default:
      return state;
  }
};
