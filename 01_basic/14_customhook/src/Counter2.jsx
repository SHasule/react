
import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
    const [count,increment,decrement] = useCounter(10)
  return (
    <div>
         <div>{count}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      
    </div>
  )
}

export default Counter2;