import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Child = ({getitem}) => {
     
    const [item,setItem]=useState([])
    useEffect(()=>{
        setItem(getitem())
    },[getitem])
  return (
    <div>
      {item && item.map(item=>{
      return  <div key={item}>{item}</div>
      })}
    </div>
  )
}

export default Child
