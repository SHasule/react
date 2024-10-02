import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      
  
 const [inputcount, setinputcount] = useState("lks");
 const count=useRef("");

//  useEffect(()=>{
//   count.current=count.current+1;
//  });
function reset(){
  setinputcount("")
}

  return (
    <>
     <input type="text" value={inputcount} onChange={(e)=>setinputcount=>(e.target.value)} />
     {/* <h3>total count {count.current}</h3> */}
     <button onClick={reset}>reset</button>
    </>
  )
}

export default App
