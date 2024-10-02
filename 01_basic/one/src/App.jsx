import React,{useState} from 'react'

const App = () => {
  const [myname, setmyname] = useState("react")

  // var myname="react";
  const  changename=()=>{
    // myname="js";
    // console.log(myname);
    setmyname("js")
    console.log(myname);
  }

  //  console.log(myname);
  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={changename}>click</button>
    </div>
  )
}

export default App


