import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';

let todoCounter = 1;

class App extends Component {

  state = {
    list: [],
    item: ''
    
  }

  //handleInputChange
  handleInputChange = event => {
    this.setState({
      item: event.target.value
    });
  }
  //handleRemove
  handleRemove = id =>  {
    this.setState({
      list: this.state.list.filter( c => c.id !== id )
    });
  };

  //handleSubmit
  handleSubmit = event => {
    event.preventDefault();
    const item = {
      id : todoCounter++,
      value: this.state.item.slice()
    };

    this.setState({
      list: this.state.list.concat(item),
      item: ''
    });
  };

  render() {
    return(
      <React.Fragment>
        <h2>Add Todo</h2>
        <div>
        <input 
         type="text"
         value={this.state.item}
         onClick={this.handleInputChange}
         
         />
         </div>
        
        <div>
         <button type="submit" onClick={this.handleSubmit}>Add Todo</button>
        </div>
        
        <div>
          <h3>Todo List</h3>
          <ul>
            {this.state.list.map(item =>  {
              return (
                <li key={item.id}>
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              );
              })}
            
          </ul>
        </div>
        
      </React.Fragment>
    );
  }
}


class Todo extends Component {
  deleteTodo = id => {
    this.props.removeTodo(id);
  };

  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={() => this.deleteTodo(this.props.id)}>X</button>
      </div>
    );
  }
}























// //https://css-tricks.com/props-and-proptypes-in-react/
// let todoCounter = 1;

// class App extends Component {
//   state = {
//     list: [],
//     item: ""
//   };
     //An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target.
//   handleInputChange = event => {
//     this.setState({ item: event.target.value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     const item = {
//       id: todoCounter++,
// //The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
//       value: this.state.item.slice()
//     };
//     this.setState({
//       list: this.state.list.concat(item),
//       item: ""
//     });
//   };
// /* 
// The method for deleting tasks is created in the App component. In the render() function, we pass the to-do properties as props to the Todo component. We also pass the handleRemove() function as a prop named removeTodo(). We will use this in the Todo component 
// */
//   handleRemove = id => {
//     this.setState({
//       list: this.state.list.filter(c => c.id !== id)
//     });
//   };

//   render() {
//     return (
         //A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. In short <> </>


//       <React.Fragment>
//         <h2>Add Todo</h2>
//         <div>
//           <input
//             type="text"
//             value={this.state.item}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <button type="submit" onClick={this.handleSubmit}>
//             Add
//           </button>
//         </div>
//         <div>
//           <h3>Lists</h3>
//           <ul>
//             {this.state.list.map(item => {
//               return (
//                 <li key={item.id}>
//                   <Todo {...item} removeTodo={this.handleRemove} />
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// /* 
// We have to pass the id of the to-do item to removeTodo() in the Todo component because we cannot update the state of the App component without it. This is essentially how we are able to pass a function between components using props — pretty similar to how we did it with an array, the difference being we’re passing functionality around instead of raw data.
// */
// class Todo extends Component {
//   deleteTodo = id => {
//     this.props.removeTodo(id);
//   };
//   render() {
//     return (
//       <div>
//         {this.props.value}
//         <button onClick={() => this.deleteTodo(this.props.id)}>X</button>
//       </div>
//     );
//   }
// }


ReactDOM.render(<App />, document.getElementById("root"));

export default App;
