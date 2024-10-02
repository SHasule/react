
import React, { useState } from 'react'
import './App.css'
import Clickevent from './componants/Clickevent';

const App=()=>{
    const color="yellow";
    const [color1,setColor]=useState(color);
 
    const n="hey"
    const [name,setname]=useState(n)
 
    const bgclor=()=>{
        console.log("clicked");
         let newbg="green"
        setColor(newbg)
         
       
        setname("clicked ")

    }
    const bgback=()=>{
        setColor("yellow")
        setname("2nd click")
    }
    return(
        <>
        <div style={{backgroundColor:color1}} >
            <button onClick={bgclor} onDoubleClick={bgback}>{name}</button>
        </div>
        <Clickevent />

        </>
    )
}

export default App


