import React from 'react';
import './App.css';

// https://css-tricks.com/working-with-refs-in-react/










class App extends React.Component {
  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();
    this.state = {
      errors: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.username.current.value;
    const password = this.password.current.value;
    const errors = this.handleValidation(username, password);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    // Submit data
  };

  handleValidation = (username, password) => {
    const errors = [];
    // Require username to have a value on submit
    if (username.length === 0) {
      errors.push("Username cannot be empty");
    }
    
    //  Require at least six characters for the password
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
    
    // If those conditions are met, then return error messaging
    return errors;
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h1>React Ref Example</h1>
        <form onSubmit={this.handleSubmit}>
           {/* If requirements are not met, then display errors */}
          {errors.map(error => <p key={error}>{error}</p>)}
          <div>
            <label>Username:</label>
            {/* // Input for username containing the ref */}
            <input type="text" ref={this.username} />
          </div>
          <div>
            <label>Password:</label>
            {/* // Input for password containing the ref */}
            <input type="text" ref={this.password} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
