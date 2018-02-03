import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//extends the react component to class based compnent
class Counter extends React.Component {
  constructor(props) {
    super(props);
    
     // define the internal state of the component
    this.state = {count: this.props.start || 0}
    
    // the following bindings are necessary to make `this` work in the callback
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  
  inc() {
    this.setState({
      count: this.state.count + 1
    });
  }
  
  dec() {
    this.setState({
      count: this.state.count - 1
    });
  }
  
  // this method should be present in your componen
  render() {
    return (
      <div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Counter;