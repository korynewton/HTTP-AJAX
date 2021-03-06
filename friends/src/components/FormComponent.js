import React from 'react'

const FormComponent = (props) => {
        return (
            <>
                <h3 className='addHeader'>{props.isUpdating ? 'Update:' : 'Add a friend form:'}</h3>
                <form className="form">
                    <input type="text" placeholder="Name" onChange={props.handleChange} name="name" value={props.item.name}/>
                    <input type="number" placeholder="Age" onChange={props.handleChange} name="age" value={props.item.age}/>
                    <input type="email" placeholder="Email" onChange={props.handleChange} name="email" value={props.item.email} />
                    <div className="buttonDiv">{(props.isUpdating)
                        ? <button onClick={(e) => props.updateFriend(e, props.item)}className='formButton'>Update</button>
                        : <button onClick={props.submitFriend}className='formButton'>Submit</button> }                       
                    </div>
                </form>
            </>
        )
    
}

export default FormComponent