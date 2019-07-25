import React, { useState } from "react";
import MemberToEdit from './EditMember'
import {team} from '../data/TeamData'

function Form(){
    const [user, setUser] = useState({name: '', email: '', role: ''})
    const [state, setState] = useState(team)
    function handleChange(event){
        const updateUser = { ...user, [event.target.name]: event.target.value}
        // console.log('userChange', user)
        setUser(updateUser)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('userSubmitObject', user)

        // team.push(user)
        console.log('@',team)
        setState([...state, user])
        console.log('@@@@@@@@@@@',team)
        // event.onClick(user)
        // event.map((props)=>{return <MemberToEdit {...props} />})
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Team Member</legend>
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
                            <input 
                                type='text'
                                name='role'
                                aria-describedby='nameHelp'
                                placeholder='Enter name'
                                value={user.role}
                                onChange={handleChange}                        
                            />
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
            {state.map((data)=>{return console.log('propsHere',data), <MemberToEdit name={data.name} email={data.email} role={data.role}/>})}
        </div>
    )
}

export default Form