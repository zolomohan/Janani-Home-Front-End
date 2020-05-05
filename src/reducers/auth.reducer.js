import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
} from 'actions/types';

const initialState = () => ({
  user: null,
  token: null,
  isLoading: false,
  isAuthenticated: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isAuthenticated: true,
      };

    case AUTH_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        user: null,
        token: null,
        isLoading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
