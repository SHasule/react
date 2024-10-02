
import React, { useState } from 'react'

const Clickevent = () => {
  
    const text="click"
    const [firstbg, setfirstbg] = useState(text)

     const backg="pink"
     const [bg, setbg] = useState(backg)

     function bgchange(){
    
     }

    function click() {
        console.log("clicked");
        setfirstbg("next");
        
        let newbg="grey";
        setbg(newbg)

    }
    
  function mouse(){
    console.log("doubleclicked");
    firstbg("2nd tap")
  }
  


    return (

        <div style={{backgroundColor:bg,marginTop:"3px"}}>
            <button onClick={click} onDoubleClick={mouse}  style={{width:"60px"}}>{firstbg}</button>
        </div>
    )
}

export default Clickevent
