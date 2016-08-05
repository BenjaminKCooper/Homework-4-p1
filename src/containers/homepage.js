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
      return <Link className="postContainer"to={`/posts/${post.id}`} key={post.id}><div className="linkText">{post.title} </div></Link>;
    });
  }

  render() {
    return (
      <div className="mainPageCenter">
        <div >
          {this.renderPosts()}
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, { fetchposts })(Homepage);
