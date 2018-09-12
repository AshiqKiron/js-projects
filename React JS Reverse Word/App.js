import React, { Component } from 'react';
import './App.css'

class App extends Component {

  state = {
    input: '',
    reverseText: ''
  }

  handleChange = e => {
    const text = e.target.value;
    this.setState({
      input: text
    });
  };

  handleReverse = e => {
    e.preventDefault();
    const text = this.state.input;
    this.setState({
      reverseText : text
      .split("")
      .reverse()
      .join("")
    })
  }

  render() {
    return(
      <React.Fragment>
          <div>The world you typed: {this.state.input}</div>
          <form onSubmit={this.handleReverse}>
            <input
            type="text"
            placeholder="Type a word"
            onChange={this.handleChange}
            value={this.state.input}
            />
            <button>Reverse Text</button>
          </form>
          <p>And the reserve word is: <b>{this.state.reverseText}</b></p>
      </React.Fragment>
    );
  }

}


export default App;