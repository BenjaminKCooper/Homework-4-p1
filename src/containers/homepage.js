import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Welcome from './welcome';
// import NavBar from './navbar';
// import Link from 'react-router';

// example class based component (smart component)
class Homepage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    all: state.all,
    post: state.posts.all,
  }
);

export default connect(mapStateToProps, null)(Homepage);
