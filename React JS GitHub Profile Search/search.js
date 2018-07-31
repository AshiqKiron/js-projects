import React, { Component } from 'react';




class SearchProfile extends Component {
  render() {
    return (
      <div className="search--box">
        {/* Bid handleForm function with form on submit */}
         <form onSubmit={this.handleForm.bind(this)}>
           <label><input type="search" ref="username" placeholder="Type Username + Enter"/></label>
         </form>
      </div>
    )
  }
  
  handleForm(e) {
   e.preventDefault();
    let username = this.refs.username.value;
    //refer & use  app.js file fetchProfile func with username parameter from handleForm func
    this.props.fetchProfile(username);
    //set the username value empty 
    this.refs.username.value = '';
  }
}

export default SearchProfile;