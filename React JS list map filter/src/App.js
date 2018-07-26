import React, { Component } from 'react';
import './App.css';

// https://www.robinwieruch.de/javascript-fundamentals-react-requirements/

/* Use of strings */
// class App extends Component {
//   render() {
//     var greeting = 'welcome to react';

//     return (
//       <div>
//         <h1>{greeting}</h1>
//       </div>
//     )
//   }
// }

/* Use of object */
/* class App extends Component {
  render() {
    var user = { name: "Roll"};

    return (
      <h1>{user.name}</h1>
    );
  }
} */

/* Use map to iterate list items */
// class App extends Component {
//   render() {
//     var users = [
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//       {name: "asdasd"},
//     ]

//     return(
//       <ul>
//         {
//           users.map(function(user, id) {
//             return <li key={id}>{user.name}</li>
//           })
//         }
//       </ul>
//     );
//   }
// }

/* ES6 map version */
// class App extends Component {
//   render() {
//     var users = [
//       {name: "asdad"},
//       {name: "asdad"},
//       {name: "asdad"},
//       {name: "asdad"},
//       {name: "asdad"},
//     ];

//     return (
//       <ul>
//         {users.map(user => <li>{user.name}</li>)}
//       </ul>
//     );
//   }
// }

/* filter function use */
class App extends Component {
  render() {
    var users = [
      {name: "5425", isDeveloper: true},
      {name: "2", isDeveloper: true},
      {name: "asdasd", isDeveloper: false},
      {name: "2", isDeveloper: false},
      {name: "523", isDeveloper: true},
      {name: "asd25asd", isDeveloper: true},
    ];

    return(
      <ul>
        {users
        .filter(user => user.isDeveloper)
        .map((user, id) => <li key={id}>{user.name}</li>)

        }
      </ul>
    );
  }
}






export default App;
