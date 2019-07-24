import React, { useState } from "react";

function Form(){
    const [user, setUser] = useState({name: '', email: '', role: ''})

    function handleChange(event){
        const updateUser = { ...user, [event.target.name]: event.target.value}
        console.log('userChange', updateUser, event.target)
        setUser(updateUser)
    }

    return(
        <form>
            <fieldset>
                <legend></legend>
                <div>
                    <label for='exampleName'>Name</label>
                    <div>
                        <input 
                            type='text'
                            name='name'
                            aria-describedby='nameHelp'
                            placeholder='Enter name'
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label for='exampleEmail'>Email</label>
                    <div>
                        <input 
                            type="email"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label for='exampleRole'>Role</label>
                    <div>
                        <input />
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </fieldset>
        </form>
    )
}

export default Form