import { POST } from 'actions/types';

const initialState = {
  post: {
    comments: [],
  },
  postList: [],
  userPostList: {
    active: [],
    disabled: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST.GET:
      return {
        ...state,
        post: {
          ...state.post,
          ...action.payload,
        },
      };

    case POST.LIST:
      return {
        ...state,
        postList: action.payload,
      };

    case POST.USER.ACTIVE:
      return {
        ...state,
        userPostList: {
          ...state.userPostList,
          active: action.payload
        },
      };

    case POST.USER.DISABLED:
      return {
        ...state,
        userPostList: {
          ...state.userPostList,
          disabled: action.payload
        }
      }

    case POST.ADD:
      return {
        ...state,
        postList: [...state.postList, action.payload],
      };

    case POST.TOGGLE:
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

    // Likes

    case POST.LIKES.LIKE:
      return {
        ...state,
        post: {
          ...state.post,
          user_liked: true,
          user_disliked: false,
          likes: state.post.likes + 1,
          dislikes:
            state.post.dislikes > 0 && state.post.user_disliked
              ? state.post.dislikes - 1
              : state.post.dislikes,
        },
      };

    case POST.LIKES.DISLIKE:
      return {
        ...state,
        post: {
          ...state.post,
          user_liked: false,
          user_disliked: true,
          likes:
            state.post.likes > 0 && state.post.user_liked ? state.post.likes - 1 : state.post.likes,
          dislikes: state.post.dislikes + 1,
        },
      };

    case POST.LIKES.REMOVELIKE:
      return {
        ...state,
        post: {
          ...state.post,
          likes: state.post.likes - 1,
          user_liked: false,
        },
      };

    case POST.LIKES.REMOVEDISLIKE:
      return {
        ...state,
        post: {
          ...state.post,
          dislikes: state.post.dislikes - 1,
          user_disliked: false,
        },
      };

    // Comments

    case POST.COMMENT.LIST:
      return {
        ...state,
        post: { ...state.post, comments: action.payload },
      };

    case POST.COMMENT.ADD:
      return {
        ...state,
        post: { ...state.post, comments: [...state.post.comments, action.payload] },
      };

    case POST.COMMENT.DISABLE:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter((comment) => comment.id !== action.payload),
        },
      };

    // Clear State
    case POST.CLEAR.USER:
      return {
        ...state,
        userPostList: {
          active: [],
          disabled: []
        }
      }
    case POST.CLEAR.POST:
      return {
        ...state,
        post: {
          comments: []
        }
      }
    default:
      return state;
  }
};
