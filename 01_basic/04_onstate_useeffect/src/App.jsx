import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setcount1] = useState(0)
  useEffect(()=>{
    console.log("useeffect executed");
    alert("count pressed")
   },[count])

  // with object
  const [name,setName]=useState({
    firstname:"",
    lastname:"",
  })  

  //with array
   const[item,setItem]=useState([])
  const additem=()=>{
    setItem([...item,{
       id:item.length,
       value:Math.floor(Math.random()*10)
        
    }])
  }


   const increment=()=>{
   setCount(count+1)
  }
  
 const decrement=()=>{
  setcount1(count1-1)
  }
 const incrembyten=()=>{
   for( let i=0;i<=10;i++)
   {
    setCount(count+i)
   }

   
  }


  return (
    <>
      <div>
       <h4>counter is {count}</h4>
       <button onClick={increment}>add</button>
       <button onClick={decrement}>remove {count1}</button>
       <button onClick={incrembyten}>increment by 10</button>


       <form >
        <input type="text" placeholder='enter your name' value={name.firstname} onChange={e=>{setName({...name,firstname:e.target.value})}}/>
        <input type="text" placeholder='enter your lastname' value={name.lastname} onChange={e=>{setName({...name,lastname:e.target.value})}}/>
       </form>
       {name.firstname}
       {name.lastname}

       <button onClick={additem}> add a random number</button>
       <ul>
        {item.map(item=>(<li key={item.value}>{item.value}</li>))}
       </ul>
      
   
       
        
      </div>
     
     
    </>
  )
}

export default App
