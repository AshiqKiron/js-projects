import React, { Component } from 'react';





export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    //A reference to the object that dispatched the event.
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          //referring to app.js file constructor filterText state
          value={this.props.filterText}
          //referring to app.js file handleFilterTextChange function
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            //referring to app.js file constructor inStockOnly
            checked={this.props.inStockOnly}
            //referring to app.js file handleInStockChange
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
