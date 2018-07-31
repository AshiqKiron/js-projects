import React, { Component } from 'react';

import './App.css';
import SearchProfile from './search';
import Profile from './profile';




//declare API url to collect git info
const API = 'https://api.github.com/users';

class App extends Component {
  constructor(props) {
    super(props)
    //set initial app set with parameters
    this.state = {
      username: 'ashiqkiron',
      name:'',
      avatar:'',
      location:'',
      repos:'',
      followers: '',
      following:'',
      homeUrl:'',
      notFound:''
    }
  }
  fetchProfile(username) { 
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        //setting state after fetching data 
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message
        })
      })
      //catch error in case we find any
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }

  //walking backwards, we know that every child has mounted and also run its own componentDidMount(). This guarantees the parent can access the Native UI elements for itself and its children.
  componentDidMount() {
    this.fetchProfile(this.state.username);
  }
  render() {
    return (
      <div>
         <section id="card">
           <SearchProfile fetchProfile={this.fetchProfile.bind(this)}/>
           <Profile data={this.state} />
         </section>
          <span className="ashiq">GitHub Card With ReactJs - Created By <a rel="noreferrer noopener"  href="https://twitter.com/ashiqkiron" target="_blank" title="Ashiq">Ashiq</a></span>
      </div>
    )
  }
}





/*  */
export default App;
