import Constructor from './componant/Constructor'
import Render from './componant/Render'
import './App.css'
import React, { useState } from 'react'
import ComponentDidMount from './componant/ComponentDidMount'
import ComponentDidUpdate from './componant/ComponentDidUpdate'
import Shouldcomponentupdate from './componant/Shouldcomponentupdate'
import ComponentwillUnmount1 from './componant/ComponentwillUnmount1'
import ComponentwillUnmountPRAC1 from './componant/ComponentwillUnmountPRAC1'

const App=()=>{


  const [name,setname]=useState(' anil')
 
  return (
    <>
    <div>
    <Constructor />
    {/* <Render />
    <ComponentDidMount /> */}
    {/* <ComponentDidUpdate /> */}
    {/* <Shouldcomponentupdate /> */}

    {/* <ComponentwillUnmount1 /> */}
    <ComponentwillUnmountPRAC1 />

    {/* <Render name={name} /> */}

    {/* <button onClick={()=>setname(" suraj")}>update name</button> */}
  
    </div>
   
    </>
  )
}


export default App
