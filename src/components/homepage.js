import React, { Component } from 'react';

import Welcome from './welcome';
import NavBar from './navbar';
import Link from 'react-router';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">your site name</Link>
        <Link to="posts/new">new post</Link>
      </div>
    );
  }
}

export default App;
