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
    item: {
      ...this.state.item,
      [e.target.name] : e.target.value
    }     
  })
}

// populateUpdate = (e, id) => {
//   e.preventDefault();
//   this.setState({
//     this.state.list.find(item => item.id === id) {
//       name : item.name,
//       age: item.age,
//       email: item.email
//     }
//   })
// }




  render() {
    return (
      <div>
        <FriendsList
        friends={this.state.list}
        submitFriend={this.submitFriend}
        handleChange={this.handleChange}
        item={this.state.item}
        populateUpdate={this.populateUpdate}
        />
      </div>
    );
  }
}

export default App;
