import React, { Component } from 'react';
import { connect } from 'react-redux';

// import marked from 'marked';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }


  onTextChange() {

  }

  render() {
    return (
      <div>
        <input onChange={this.onTextChange} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(New);
