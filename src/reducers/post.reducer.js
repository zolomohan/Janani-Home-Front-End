import { GET_POSTS, POST_ADDED } from 'actions/types';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    case POST_ADDED:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state;
  }
};
