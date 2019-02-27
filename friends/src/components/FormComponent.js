import React from 'react'

const FormComponent = (props) => {
        return (
            <>
                <h3 className='addHeader'>Add a friend form:</h3>
                <form className="form">
                    <input type="text" placeholder="Name" onChange={props.handleChange} name="name" value={props.name}/>
                    <input type="number" placeholder="Age" onChange={props.handleChange} name="age" value={props.age}/>
                    <input type="email" placeholder="Email" onChange={props.handleChange} name="email" value={props.email} />
                    <div className="buttonDiv">
                        <button onClick={props.submitFriend}className='formButton'>Submit</button>
                        <button className='formButton'>Edit</button>
                    </div>
                        

                </form>
            </>
        )
    
}

export default FormComponent