import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//
// import App from './components/app';
//
// import './style.scss';
//
// // entry point that just renders app
// // could be used for routing at some point
// ReactDOM.render(
//   <Router history={browserHistory} routes={routes} />
//   , document.getElementById('main'));


// at the top
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';


// this creates the store with the reducers, and does some other stuff to initialize devtools
const store = createStore(reducers, {}, compose(
  applyMiddleware(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));


// replace your ReactDOM render with the following
// note this uses the Router stuff from last week
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('main'));