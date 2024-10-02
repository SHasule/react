import React, { useCallback } from 'react';
import './App.css'
import { useState } from 'react';
import Child from './comopant/Child';
const App = () => {
  const [add,setAdd]=useState(0);

  const [count,setCount]=useState(0)
//   const learning=()=>{
// //some operation
//   }

  const learning=useCallback(()=>{

  },[count])
  return (
    <div className='app'>
      <h1>learning usecallback</h1>
      <Child learning={learning} count={count} />
      <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>addition</button>
       <button onClick={()=>setCount(count+1)}>count{count}</button>      
    </div>
  )
}

export default App
