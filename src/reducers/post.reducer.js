import { GET_POST, GET_POSTLIST, POST_ADDED, POST_TOGGLED } from 'actions/types';

const initialState = {
  post: null,
  postList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GET_POSTLIST:
      return {
        ...state,
        postList: action.payload,
      };
    case POST_ADDED:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };
    case POST_TOGGLED:
      return {
        ...state,
        postList: state.postList.map((post) =>
          post.id === action.payload
            ? {
                ...post,
                active: !post.active,
              }
            : post
        ),
      };
    default:
      return state;
  }
};
