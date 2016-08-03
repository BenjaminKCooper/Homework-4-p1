import { combineReducers } from 'redux';

import PostsReducer from './postReducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
});

export default rootReducer;
