import React from 'react'

const FriendsList = props => {
  return (
    <div>
      {props.friends.map( f => {
          return (
              <h3 key={f.id}>{f.name}</h3>
          )
      })}
    </div>
  )
}


export default FriendsList
