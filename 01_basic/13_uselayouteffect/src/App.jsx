import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './componant/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      app componant
      <Layout />
      </div>
     
    </>
  )
}

export default App
