import React from 'react'
import { useState } from 'react'
import Child from './Child'
import { useCallback } from 'react'

const Parent = () => {
   const [count1,setCount1] =useState(0)
   const [count2,setCount2] =useState(0)


   const getitem= useCallback(()=>{

    console.log(count2+1,count2-1);
    for(let i=0;i<11000;i++){}
    console.log('getitem');
    return [count2+1,count2-1]
   },[count2])
//    const getitem =()=>{
//     console.log(count2+1,count2-1);
//     for(let i=0;i<1100000000000;i++){}
//     console.log('getitem');
//     return [count2+1,count2-1]
//    }

  return (
    <div>
        <button onClick={()=>setCount1(count1+1)}>count1 {count1} </button>
        {/* <h1>{count1}</h1>
        <h1>{count2}</h1> */}
      
        <button onClick={()=>setCount2(count2-1)}>count2 {count2}</button>
        <Child getitem={getitem}/>
      
    </div>
  )
}

export default Parent

