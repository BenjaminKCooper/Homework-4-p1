import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
// import marked from 'marked';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  renderTextArea() {
    if (this.state.isEditing) {
      return <Textarea id="textareaDiv" className="noteMD" onChange={this.onTextChange} />;
    } else {
      return <div id="markedDiv" className="noteMD" dangerouslySetInnerHTML={{ __html: marked(this.props.text || '') }} />;
    }
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

export default App;
