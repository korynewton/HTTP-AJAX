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
  .then( (res) => {
    console.log(res)
  } )
  .catch( (err) => {
    console.log(err)
  } )
}

  render() {
    return (
      <div>
        <FriendsList />
      </div>
    );
  }
}

export default App;
