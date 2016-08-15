import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';


export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      ); }

    // your various component lifecycle methods
  }

  const mapStateToProps = (state) => (
    {
      authenticated: state.auth.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
