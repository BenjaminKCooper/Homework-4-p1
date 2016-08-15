import { combineReducers } from 'redux';

import PostsReducer from './postReducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
});

export default rootReducer;
