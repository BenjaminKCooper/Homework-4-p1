import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';

// import marked from 'marked';

// example class based component (smart component)
class NewUser extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      fullName: '',
      email: '',
      password: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onNameChange(event) {
    this.setState({ fullName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }


  onButtonPress(event) {
    console.log(this.state);
    this.props.signupUser({
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
    });
  }


  render() {
    return (
      <div className="postContainer">
        <input placeholder="Full Name" onChange={this.onNameChange} />
        <input placeholder="Email" onChange={this.onEmailChange} />
        <input placeholder="Password" onChange={this.onPasswordChange} />
        <button onClick={this.onButtonPress}>Create New User</button>
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

export default connect(null, { signupUser })(NewUser); // / export functions where null is
