import React from 'react'
import axios from 'axios'

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    } 
    
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitFriend = () => {
        const newFriend = {
            name : this.state.name,
            age : this.state.age,
            email : this.state.email
        }
        axios.post("http://localhost:5000/friends", newFriend)
            .then( res => console.log(res))
            .catch(err => console.log(err))
    }
    
    
    render() {
        return (
            <>
                <h3 className='addHeader'>Add a friend form:</h3>
                <form className="form">
                    <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={this.state.name}/>
                    <input type="number" placeholder="Age" onChange={this.handleChange} name="age" value={this.state.age}/>
                    <input type="text" placeholder="Email" onChange={this.handleChange} name="email" value={this.state.email} />
                    <button onClick={this.submitFriend}className='submitButton'>Submit</button>
                </form>
            </>
        )
    }
}

export default FormComponent