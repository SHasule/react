import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './assets/componant/List'
import List2 from './assets/componant/List2'
import Mainlist from './assets/componant/Mainlist'
import List4 from './assets/componant/List4'
 import NestedList from './assets/componant/NestedList'
 import Nested2 from './assets/componant/Nested2'
 import Reusecompo from './assets/componant/Reusecompo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="add">
      {/* <List /> */}

      {/* <List2 city="nanded"/>
      <List2 city1="jamb"/>
      <List2 city="mukhed"/> */}
 
     {/* <Mainlist />

     <List4 />
     <NestedList />
     <Nested2 /> */}
     <Reusecompo />


     </div>
    </>
  )
}

export default App
