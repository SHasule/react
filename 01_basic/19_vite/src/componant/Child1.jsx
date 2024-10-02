
import React from 'react'

const Child1 = (p) => {
   const name="starting react"
  return (
    <div>
       <h2>language is {p.value}</h2>
       <button onClick={()=>p.alert(name)}>click</button>
    </div>
  )
}

export default Child1
