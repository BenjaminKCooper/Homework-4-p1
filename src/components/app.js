import React, { Component } from 'react';

import Welcome from './welcome';
import NavBar from './navbar';

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
        <Welcome />
        <NavBar />
      </div>
    );
  }
}

export default App;
