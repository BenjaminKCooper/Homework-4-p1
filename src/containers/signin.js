import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class ReturningUser extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
    };
    this.onemailChange = this.onemailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onContentChange = this.onContentChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }


  onemailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  onButtonPress(event) {
    console.log(this.state);
    this.props.signinUser({
      email: this.state.email,
      password: this.state.password,
    });
  }


  render() {
    return (
      <div className="postContainer">
        <input placeholder="User Name" onChange={this.onemailChange} />
        <input placeholder="Password" onChange={this.onPasswordChange} />
        <button onClick={this.onButtonPress}>Sign In</button>
      </div>
    );
  }
}
// const mapStateToProps = (state) => (
//   {
//     all: state.all,
//     post: state.posts.all,
//   }
// );
export default connect(null, { signinUser })(ReturningUser); // / export functions where null is
