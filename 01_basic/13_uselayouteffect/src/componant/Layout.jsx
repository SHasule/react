

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Layout = () => {
    //  const ref=useRef('red');

    const [color,setcolor]=useState('')
    useEffect(()=>{
        // ref.current="pink"
        // console.log(ref,"useeffect");
        // window.scrollBy(0,500)
        console.log("useeffect");
        setcolor("pink");
    },[])
    useLayoutEffect(()=>{
 
        // console.log(ref,"layouteffect");
        // window.scrollBy(0,500)
        console.log("layouteffcet");
        setcolor("red");
    },[])
  return (
    <div style={{backgroundColor:color}}>
        uselayoueffect
      
    </div>
  )
}

export default Layout

