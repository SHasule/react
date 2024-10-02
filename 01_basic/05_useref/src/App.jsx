import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useref:-used for dom manipulation
function App() {
 
//   const refelement=useRef();
//  const [name,setname]=useState("")

//  function reset(){
//     setname("");
//     refelement.current.focus();

//  }
//  function chanestate(){
  
//     refelement.current.style.color="blue";
//     refelement.current.value="js"
  

//  }

const refelement=useRef();

const [name, setname] = useState("");

function reset(){
  setname("")
}

function update(){
  refelement.current.style.color="pink";
  refelement.current.value="hey react"
}


  return (
    <>

    <div>
      <h1>this is hooks</h1>
      <input type="text" ref={refelement} value={name} onChange={(e)=>{setname(e.target.value)}} />
      <button onClick={reset}>reset</button>
      <button onClick={update}>update</button>


    </div>
     {/* <div>
    <h1>learning useref</h1>
    <input type="text" ref={refelement} value={name} onChange={(e)=>setname(e.target.value)} />
    <button onClick={reset}>reset</button>
    <button onClick={chanestate}>change state</button>

     </div> */}
    </>
  )
}

export default App
