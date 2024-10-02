import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { useReducer } from 'react';

const initialcount={count:0}
 const reducer=(state,action)=>{
  // console.log(state,action);
  switch(action.type){
    case "increment":
      return {count:state.count+1}

      case "decrement":
        return {count:state.count-1}
        return state
  }
 
 }


const App = () => {
  
  const [state,dispatch] =useReducer(reducer,initialcount)

  return (
    <div>
        <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
       {state.count}
        <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
    </div>
  )
}

export default App

