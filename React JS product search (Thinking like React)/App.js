import React, { Component } from 'react';
import './App.css';
import {SearchBar} from './searchbar';
import {ProductTable} from './producttable';





export class FilterableProductTable extends Component {
  // The constructor for a React component is called before it is mounted. 
  // When implementing the constructor for a React. Component subclass, you should call super(props) before any other statement. 
  // Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  constructor(props) {
    super(props);
    //set app initial state
    this.state = {
      //set the html input field empty
      filterText: '',
      //set the stock tickbox to "not-clicked"
      inStockOnly: false
    };
    
    // This binding is necessary to make `this` work in the callback
    // this.handleFilterTextChange will work elsewhere when called, otherwise without this binding the call will fail
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  



  //define input function with getting initial set state from constructor
  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  //define stock function with getting initial set state from constructor
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        {/* render searchbar */}
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        {/* render products */}
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }


}
