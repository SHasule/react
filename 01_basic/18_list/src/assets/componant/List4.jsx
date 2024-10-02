
import React from 'react'

const List4 = () => {
   
    const worker=[
        {name:'shyam',id:1,email:"shyam@text"},
        {name:'shyam',id:2,email:"shyam@text"},
        {name:'shyam',id:1,email:"shyam@text"},
    ]
  return (

    <div> 
        <table border={2}>
            <tbody>
            <tr><td>name</td>
            <td>email</td>
            <td>id</td></tr>
      {
          worker.map((data,i)=>  
           data.id===1?
          <tr key={i}> 
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.id}</td>
          </tr>:null
       ) }   
       </tbody>
        </table>   
    </div>
  )
}

export default List4
