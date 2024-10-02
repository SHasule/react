
import React, { useContext } from 'react'
import { data1 } from '../App'
    


const A = () => {
   const name= useContext(data1)
  return (
    <>
 
    <div>
      {name}
    </div>
    </>
  )
}

export default A
