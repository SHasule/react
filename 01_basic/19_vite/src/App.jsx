
import React from 'react'
import Child1 from './componant/Child1'
import HideandShow from './HideandShow'

export const App = () => {
  const langname="javascript"
  
    function parentclick(name) {
      console.log("parentclick");
      alert(name)
      
    }

  return (
    <div>App

      <Child1 value={langname} alert={parentclick}/>
      <HideandShow />
    </div>
  )
}
export default App