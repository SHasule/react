import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

    useEffect(()=>{
      alert("hello")
      console.log("useEffect started",{count});
    },[])

  const [count,setCount]=useState(0);

  return (
    <>
      <p>the count is={count}</p>
    <button onClick={()=>setCount((count)=>count+1)} >count is</button>
     

       
      {/* <h1>Vite + React {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       </div> */}
    </>
  )
}

export default App
