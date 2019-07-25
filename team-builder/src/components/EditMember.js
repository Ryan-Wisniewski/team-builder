import React from 'react'
import {team} from '../data/TeamData'

function MemberToEdit(props){
    console.log('props',props)
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
            <p>{props.role}</p>
            <button>Edit</button>
        </div>
    )
}

export default MemberToEdit