
import React from 'react'
import useCounter from './useCounter'

const Counter1 = () => {
    const [count,increment,decrement] = useCounter()
  return (
    <div>
         <div>{count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      
    </div>
  )
}

export default Counter1
