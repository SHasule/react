
import React from 'react'

const Child = (props) => {
    const data={name:"react js",id:2}

   
  return (
    <div>
        <h3>name is {props.data}</h3>
      <button onClick={()=> props.alert(data)}>child</button>
    </div>
  )
}

export default Child

