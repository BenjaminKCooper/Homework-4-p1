import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchpost, updatePost } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = { title: '', tags: '', content: '', editingTitle: false, editingTags: false, editingContent: false };
    this.onDeleteButtonPress = this.onDeleteButtonPress.bind(this);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderTags = this.renderTags.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.editCheckTitle = this.editCheckTitle.bind(this);
    this.editCheckTags = this.editCheckTags.bind(this);
    this.editCheckContent = this.editCheckContent.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
    // this.updateLocalPost();
  }
  // this.props.params.id

  onDeleteButtonPress(event) {
    this.props.deletePost(this.props.params.id);
  }

  // if (this.state.editingTitle) {
  //   this.state.setState({ editingTitle: false });
  // } else {
  //   this.state.setState({ editingTitle: true });
  // }
  editCheckTitle() {
    this.setState({ editingTitle: !this.state.editingTitle });
  }

  editCheckTags() {
    this.setState({ editingTags: !this.state.editingTags });
  }

  editCheckContent() {
    this.setState({ editingContent: !this.state.editingContent });
  }

  renderContent() {
    if (this.state.editingContent) {
      return <div>EDITING CONTENT</div>;
    } else {
      return <div>{this.props.post.content}</div>;
    }
  }

  renderTags() {
    if (this.state.editingTags) {
      return <div>EDITING TAGS</div>;
    } else {
      return <div>{this.props.post.tags}</div>;
    }
  }

  renderTitle() {
    if (this.state.editingTitle) {
      return <div>EDITING TITLE</div>;
    } else {
      return <div>{this.props.post.title}</div>;
    }
  }

  render() {
    if (!this.props.post) {
      return <div>loading post...</div>;
    }
    return (
      <div>
        <div>
          {this.renderTitle()}
          <button type="submit" onClick={this.editCheckTitle} >Edit Title</button>
        </div>
        <div>
          {this.renderTags()}
          <button type="submit" onClick={this.editCheckTags} >Edit Tags</button>
        </div>
        <div>
          {this.renderContent()}
          <button type="submit" onClick={this.editCheckContent} >Edit Content</button>
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
export default connect(mapStateToProps, { updatePost, deletePost, fetchpost })(Show); // / export functions where null is
