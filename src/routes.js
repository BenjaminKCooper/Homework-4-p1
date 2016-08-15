import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RequireAuth from './containers/require-auth';

import New from './containers/new';
import App from './components/app';
import Show from './containers/show_edit';
import Homepage from './containers/homepage';
import SignIn from './containers/signin';
import SignUp from './containers/signup';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    // <Route path="posts/new" component={New} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Route>
);
