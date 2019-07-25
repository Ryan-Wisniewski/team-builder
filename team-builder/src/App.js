import React, {useState} from 'react';
import './App.css';

import Form from './components/Form'
import MemberToEdit from './components/EditMember'
import {team} from './data/TeamData'

function App() {
  // const [changeName, setChangeName] = useState()
  return (
    <div className="App">
      <Form />
      {/* {team.map((data)=>{return console.log('propsHere',data), <MemberToEdit name={data.name} email={data.email} role={data.role}/>})} */}
    </div>
  );
}
//<MemberToEdit />
export default App;
