import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsLists'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : []
    }
  }

componentDidMount() {
  axios.get("http://localhost:5000/friends") 
  .then( res => {
    this.setState({ list : res.data})  
  } )
  .catch( err => {
    console.log(err)
  } )
}

  render() {
    return (
      <div>
        <FriendsList friends={this.state.list}/>
      </div>
    );
  }
}

export default App;
