import {
  GET_POST,
  GET_POSTLIST,
  POST_ADDED,
  POST_TOGGLED,
  POST_LIKED,
  POST_DISLIKED,
  POST_REMOVELIKE,
  POST_REMOVEDISLIKE,
  GET_LIKESTATUS,
  GET_LIKECOUNT,
} from 'actions/types';

const initialState = {
  post: {
    liked: false,
    disliked: false,
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
            : state.post,
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
          likes: state.post.likes + 1,
          dislikes: state.post.dislikes > 0 ? state.post.dislikes - 1 : state.post.dislikes,
        },
      };
    case POST_DISLIKED:
      return {
        ...state,
        post: {
          ...state.post,
          liked: false,
          disliked: true,
          likes: state.post.likes > 0 ? state.post.likes - 1 : state.post.likes,
          dislikes: state.post.dislikes + 1,
        },
      };
    case POST_REMOVELIKE:
      return {
        ...state,
        post: {
          ...state.post,
          likes: state.post.likes - 1,
          liked: false,
        },
      };
    case POST_REMOVEDISLIKE:
      return {
        ...state,
        post: {
          ...state.post,
          dislikes: state.post.dislikes - 1,
          disliked: false,
        },
      };
    case GET_LIKESTATUS:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
        },
      };
    case GET_LIKECOUNT:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
