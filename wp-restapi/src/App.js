import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

/* Inside the render method we are using the attribute dangerouslySetInnerHTML 
because we are getting the raw HTML. 
We need to encode the content and by that attribute we can */
class WPPost extends React.Component {
  constructor(props){
    super(props); 
     
  } 
  render() {
    return (
      <article>
      <h2 dangerouslySetInnerHTML={{__html: this.props.post.title.rendered}}></h2>
      <p dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}}></p>
        <a target="_blank" href={this.props.post.link}>Read More</a>
       </article>
    )
  }
}

//define our component
class WPSitePosts extends React.Component {
  constructor(props){
    // Set this.props
    super(props);
  }
  render() {
    let posts = '';
    // We will populate the posts here
    if( this.props.posts.length == 0 ) {
      posts = <p>Nothing to See</p>;
    } else {
      posts = this.props.posts.map(post => {
        return(
         <WPPost post={post}/>
        )
      });
    }
    return (
      <div>
      {posts}
      </div>
    )
  }
}

// first create WPSitesSelector component
class WPSitesSelector extends React.Component {
  /* Before we get any data from the URLs, we need to listen to the change event on the select. 
  So, We will have to enable the properties and also listen to the onChange event.
   Let’s enhance our component WPSitesSelector */
  constructor(props){
    //We are using props here so enable them
    super(props);
    //Enable this so we can access props
    this.handleChange = this.handleChange.bind(this);
  }
  //defined a new method handleChange
  //Since this method will need access to properties, it needs access to "this" 
  //That is why we are binding it in the constructor method
  handleChange(e) {
    // Calling the passed function through props(from the root as the property getPostsOnChange)
    //passing the selected value to it (the URL)
     // this will call getPosts in App
    this.props.getPostsOnChange(e.target.value);
  }
  //render method
  //For everything to work, we had to define which method to call when the onChange event occurs. 
  //That is done through JSX in the render method
  render() {
    //array with links
    const data = [
      {
        url: 0,
        title: 'Select a Site'
      },
      {
        url: 'https://tommcfarlin.com/wp-json/wp/v2/posts',
        title: 'TomMcFarlin.com'
      },
      {
        url: 'https://carlalexander.ca/wp-json/wp/v2/posts',
        title: 'CarlAlexander.com'
      },
      {
        url: 'https://pippinsplugins.com/wp-json/wp/v2/posts',
        title: 'PippinsPlugins.com'
      },
      {
        url: 'https://wesbos.com/wp-json/wp/v2/posts',
        title: 'WesBos.com'
      },
      {
        url: 'https://growdevelopment.com/wp-json/wp/v2/posts',
        title: 'GrowDevelopment.com'
      },
       {
        url: 'https://ibenic.com/wp-json/wp/v2/posts',
        title: 'Ibenic.com'
      },
    ];
    
    // Building a list of options as React Elements with JSX
    const links = data.map( ( link, index ) => {
      return (
      <option key={index} value={link.url}>
        {link.title}
      </option>)
    });

    // Returning the select dropdown with all the links as options
    return (
      <select onChange={this.handleChange}>
      {links}
      </select>
    )
  }
}

//store fetched data & use React state to save 
class App extends React.Component {
  // prepare component. equivalent of PHP: __construct 
  constructor(props) {
    //Enable this.props for future. equivalent of PHP: __construct()
    // By sending props, we will have access to this.props. In our root class, we could just go by calling super() since we are not accessing the properties.
    super(props);
    //Bind this so we can use this.setState()
    //binding the method getPosts to this. That way, the newly defined method will have access to the entire object through this
    this.getPosts = this.getPosts.bind(this);
    //set the initial state by putting an empty array of posts in it.
    this.state = {posts : []};
  }
  getPosts(url) {
    //if not empty
    if( url !== '0' ) {
      //es6 fetch
      let json = fetch(url)
      //return the response convert the raw data into json
      .then(response => { return response.json()})
      //get that json and pass it into the state
      .then(posts => {this.setState({posts: posts})});
    } else {
      this.setState({posts: []});
    }
  }
  render() {
    return (
     <div>
       {/* passing this method getPosts as a property to our component WPSitesSelector.
       That way, we will be able to access it through properties and call it. 
        By passing the URL in that method, the root method will be called 
        and the state will change. That is also known as Inverse Data Flow.  */}
        <WPSitesSelector getPostsOnChange={this.getPosts}/>
        {/* // Adding lists of posts and passing posts from state. */}
        <WPSitePosts posts={this.state.posts} />
     </div>
    )
  }
}

const element = <App />

export default App;