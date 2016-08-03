import { ActionTypes } from '../actions';

const postsReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default postsReducer;
