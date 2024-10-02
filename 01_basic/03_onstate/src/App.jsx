import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  return (
    <>

      <div className="state">

      <h1>{count}</h1>
      <button className='add' onClick={()=>setCount(count+1)}>add</button>
      
      <button className='remove' onClick={()=>(count===0)?setCount(0):setCount(count-1)}>remove</button>
      </div>
      
      {/* <div className="card">

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div> */}
    
    </>
  )
}

export default App
