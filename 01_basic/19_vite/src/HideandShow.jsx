
import react from 'react'
import { useState } from 'react'

const HideandShow=()=>{
    const [status,setstatus]=useState(true)
   
    
    return(
        <div>
            {
                status? <h3>hello world</h3>:null
            }
            
      
       <button onClick={()=>setstatus(true)}>show</button>
       <button onClick={()=>setstatus(false)}>hide</button>
       <button onClick={()=>setstatus(!status)}>Toggle</button>
      
        </div>
    )
}

export default HideandShow