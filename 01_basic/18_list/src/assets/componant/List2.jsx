
import React from 'react'

const List2 = (props) => {
    const list=['pune','latur','mumbai','goa']
       const name=  list.map((city)=><li>{city}</li>)
  return (
    <div>
        {/* <p>i live in {props.city1}</p> */}
      {/* <li>{name}</li> */}
      {/* <li>{props.city}</li> */}
      {/* {list[1]} */}
      <p>i live in {props.city1}</p>
    </div>
  )
}

export default List2
