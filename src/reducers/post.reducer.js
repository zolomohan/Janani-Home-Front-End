import {
  GET_POST,
  GET_POSTLIST,
  POST_ADDED,
  POST_TOGGLED,
  POST_LIKED,
  POST_DISLIKED,
  POST_REMOVELIKE,
  POST_REMOVEDISLIKE,
} from 'actions/types';

const initialState = {
  post: {
    liked: false,
    disliked: false
  },
  postList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
        },
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
        post:
          state.post.id === action.payload
            ? {
                ...state.post,
                active: !state.post.active,
              }
            : null,
        postList: state.postList.map((post) =>
          post.id === action.payload
            ? {
                ...post,
                active: !post.active,
              }
            : post
        ),
      };
    case POST_LIKED:
      return {
        ...state,
        post: {
          ...state.post,
          liked: true,
          disliked: false,
        },
      };
    case POST_DISLIKED:
      return {
        ...state,
        post: {
          ...state.post,
          liked: false,
          disliked: true,
        },
      };
    case POST_REMOVELIKE:
      return {
        ...state,
        post: {
          ...state.post,
          liked: false,
        },
      };
    case POST_REMOVEDISLIKE:
      return {
        ...state,
        post: {
          ...state.post,
          disliked: false
        }
      }
    default:
      return state;
  }
};
