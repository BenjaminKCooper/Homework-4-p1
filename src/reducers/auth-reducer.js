import { ActionTypes } from '../actions';


const AuthReducer = (state = { all: [], post: null }, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return { authenticated: true };
    case ActionTypes.DEAUTH_USER:
      return { authenticated: false };
    case ActionTypes.AUTH_ERROR:
      return { authenticated: false };
    default:
      return { authenticated: false };
  }
};

export default AuthReducer;
