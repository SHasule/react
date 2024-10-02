import React, { useEffect, useState } from 'react'

 import './From.css'
const From = () => {
    const data={name:'',email:'',password:''}

    const [msg,setmsg]=useState(false)

    useEffect(()=>{
        console.log("restration");
    },[msg])
    const [inputdata,setInputdata]=useState(data)
    function handledata(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
        console.log(inputdata);
    }
    function submithandle(e){
        e.preventDefault();
        if(!inputdata.name || !inputdata.email || !inputdata.password)
            {
                alert("fill form")
            }
            else{
                // alert('done')
                setmsg(true)
 
            }
            
    }
           
    
   
  return (
    <>
 <pre>
  {(msg)?<h2>hello {inputdata.name}, you have registar succsefully</h2>:""}
 </pre>
    <form className='container' onSubmit={submithandle}>
        <div className="header">
            <h1>Registration From</h1>
        </div>

        <div className='input'>
            <input type="text" placeholder='enter your name'name='name'
            value={inputdata.name} onChange={handledata}/>
        </div>
        <div>
            <input type="text" placeholder='enter your email'name='email'
            value={inputdata.email}  onChange={handledata}/>
        </div>
        <div>
            <input type="text" placeholder='enter your password'name='password'
            value={inputdata.password}  onChange={handledata}/>
        </div>
        <button className='btn1' type='submit'>submit</button>
      
    </form>
    </>
  )
    
}

export default From
