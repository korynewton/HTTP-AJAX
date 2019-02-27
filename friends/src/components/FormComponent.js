import React from 'react'

const FormComponent = () => {
    return (
        <>
            <h3 className='addHeader'>Add a friend form:</h3>
            <form className="form">
                <input type="text"  placeholder="Name" />
                <input type="text" placeholder="Age" />
                <input type="text" placeholder="Email" />
                <button className='submitButton'>Submit</button>
            </form>
        </>
    )
}

export default FormComponent