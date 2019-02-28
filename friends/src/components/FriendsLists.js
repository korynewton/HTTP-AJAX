import React from 'react'
import FormComponent from './FormComponent'

const FriendsList = props => {
  return (
      <>
        <div className='list'>
        <h1>Friends:</h1>
        {props.friends.map( f => {
            return (
                <div className='individualFriend' key={f.id}>
                    <h3>{f.name}</h3>
                    <h6>age: {f.age}</h6>
                    <h6>email: {f.email}</h6>
                    <div>
                        <button onClick={(e) => props.populateUpdate(e, f.id)}>edit</button>
                        <button onClick={(e) => props.deleteFriend(e, f.id)}>delete</button>
                    </div>
                </div>
            )
        })}
        </div>
        
        <FormComponent
        submitFriend={props.submitFriend}
        updateFriend={props.updateFriend}
        handleChange={props.handleChange}
        isUpdating={props.isUpdating}
        item={props.item}

        />
    
      </>
    
  )
}


export default FriendsList
