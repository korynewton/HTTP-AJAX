import React, { Component } from 'react';
import axios from 'axios'

import FriendsList from './components/FriendsLists'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list : [],
      item: {
        name: '',
        age: '',
        email: ''
      }
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
  // const newFriend = {
  //     name : this.state.name,
  //     age : Number(this.state.age),
  //     email : this.state.email
  // }
  axios.post("http://localhost:5000/friends", this.state.item)
      .then( res => {
        this.setState({ 
          list: res.data,
          item : {
            name: '',
            age: '',
            email: '' 
          }
        })
        console.log(res)
      })
      .catch(err => console.log(err))
}


handleChange = (e) => {
  this.setState({
    item: {
      ...this.state.item,
      [e.target.name] : e.target.value
    }     
  })
}

populateUpdate = (e, id) => {
  e.preventDefault();
  const selectedItem = this.state.list.find(i => i.id === id)
  console.log(selectedItem)
  this.setState({
    item : selectedItem
  })
}


updateFriend = (e, item) => {
  e.preventDefault();
  axios.put(`http://localhost:5000/friends/${item.id}`, item)
    .then( res => this.setState({
      list: res.data,
      item: {
        name: '',
        age: '',
        email: ''
      }
    }))
    .catch( err => console.log(err))

}

  render() {
    return (
      <div>
        <FriendsList
        friends={this.state.list}
        submitFriend={this.submitFriend}
        handleChange={this.handleChange}
        item={this.state.item}
        populateUpdate={this.populateUpdate}
        updateFriend={this.updateFriend}
        />
      </div>
    );
  }
}

export default App;
