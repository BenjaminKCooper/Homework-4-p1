import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { signoutUser } from '../actions/index';


// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="topBarHome">
        <Link to="/">BenBlog</Link>
        <Link to="posts/new">new post</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signout">new post</Link>
        <button onClick={this.props.signoutUser}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

// export default NavBar;

export default connect(mapStateToProps, { signoutUser })(NavBar); // / export functions where null is
