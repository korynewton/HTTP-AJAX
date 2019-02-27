import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsLists'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : [],
      name: '',
      age: '',
      email: ''
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

submitFriend = (e) => {
  e.preventDefault();
  const newFriend = {
      name : this.state.name,
      age : Number(this.state.age),
      email : this.state.email
  }
  axios.post("http://localhost:5000/friends", newFriend)
      .then( res => {
        this.setState({ 
          list: res.data,
          name: '',
          age: '',
          email: '' 
        })
        console.log(res)
      })
      .catch(err => console.log(err))
}

handleChange = (e) => {
  this.setState({
      [e.target.name] : e.target.value
  })
}


  render() {
    return (
      <div>
        <FriendsList
        friends={this.state.list}
        submitFriend={this.submitFriend}
        handleChange={this.handleChange}
        name={this.state.name}
        age={this.state.age}
        email={this.state.email}
        />
      </div>
    );
  }
}

export default App;
