import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './componant/A'

 
const data1=createContext()
function App() {
  const [count, setCount] = useState(0)
  const name="react";

  return (
    <>
  <data1.Provider value={name}>
    <A />
  </data1.Provider>
    </>
  )
}

export default App
export {data1}
