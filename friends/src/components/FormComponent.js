import React from 'react'

const FormComponent = () => {
    return (
        <>
            <h3 className='addHeader'>Add a friend form:</h3>
            <form className="form">
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <label>
                Age:
                <input type="text" name="name" />
                </label>
                <label>
                Email:
                <input type="text" name="name" />
                </label>
                <button className='submitButton'>Submit</button>
            </form>
        </>
    )
}

export default FormComponent