import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchpost } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    // this.state = { title: '', tags: '', content: '' };
    // this.updateLocalPost = this.updateLocalPost.bind(this);
    this.onDeleteButtonPress = this.onDeleteButtonPress.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
    // this.updateLocalPost();
  }
  // this.props.params.id

  onDeleteButtonPress(event) {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <div>
          {this.props.post.title}
        </div>
        <div>
          {this.props.post.tags}
        </div>
        <div>
          {this.props.post.content}
        </div>
        <button type="submit" onClick={this.onDeleteButtonPress} >DELETE</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);
export default connect(mapStateToProps, { deletePost, fetchpost })(Show); // / export functions where null is
