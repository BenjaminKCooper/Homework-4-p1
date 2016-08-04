import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { all: action.payload, post: state.post };
    case ActionTypes.FETCH_POST:
      return { all: state.all, post: action.payload };

    // case ActionTypes.CREATE_POST:
    //   return;
    // case ActionTypes.UPDATE_POST:
    //   return;
    // case ActionTypes.DELETE_POST:
    //   return;
    default:
      return state;
  }
};

export default postsReducer;
