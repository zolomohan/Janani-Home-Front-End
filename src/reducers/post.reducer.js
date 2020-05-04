import { GET_POSTS, POST_ADDED, POST_TOGGLED } from 'actions/types';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case POST_ADDED:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case POST_TOGGLED:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                active: action.payload.value,
              }
            : post
        ),
      };
    default:
      return state;
  }
};
