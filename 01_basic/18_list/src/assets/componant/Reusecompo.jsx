
import React from 'react'
import User from './User'
const Reusecompo = () => {
    
    const student=[
        {name:"peter",email:"peter@text",contact:777,},
        {name:"jaya",email:"jaya@text",contact:977},
        {name:"sachin",email:"sachin@text",contact:777},
        {name:"virat",email:"virat@text",contact:777},
   ]
  return (
    <div>
        <h1>reuse componant</h1>
    { 
    student.map((item,i)=>
    <h1><User data={item} /></h1>)


    }
    </div>

)}

export default Reusecompo
