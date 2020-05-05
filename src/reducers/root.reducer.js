import { combineReducers } from 'redux';
import postReducer from 'reducers/post.reducer';
import authReducer from 'reducers/auth.reducer';

export default combineReducers({
  postReducer,
  authReducer,
});
