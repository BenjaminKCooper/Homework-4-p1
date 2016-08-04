import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchpost } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
    this.showPost = this.showPost.bind(this);
  }
  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
  }
  // this.props.params.id

  showPost() {
    console.log(this.props.post.title);
  }

  render() {
    return (
      <div>
        {this.showPost()}
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);
export default connect(mapStateToProps, { fetchpost })(Show); // / export functions where null is
