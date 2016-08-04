import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Welcome from './welcome';
// import NavBar from './navbar';
import { Link } from 'react-router';
import { fetchposts } from '../actions/index';
// example class based component (smart component)
class Homepage extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    // this.renderPosts = this.renderPosts.bind(this);
  }

  componentWillMount() {
    this.props.fetchposts();
  }


  renderPosts() {
    return this.props.posts.map((post) => {
      return <Link to={`/posts/${post.id}`} key={post.id}>{post.title}</Link>;
    });
  }

  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchposts })(Homepage);
