
import React from 'react'

const Mainlist = () => {
   
   // const name=['anil','sunil','ravi']
//    const namelist=  name.map((item)=>{
//     return console.log("my name is",item);});

    // for(let i=0;i<=name.length;i++){
    //     console.log("name is",name[i]);
    // }

    const student=[
        {name:"peter",email:"peter@text",contact:777,},
        {name:"jaya",email:"jaya@text",contact:977},
        {name:"sachin",email:"sachin@text",contact:777},
        {name:"virat",email:"virat@text",contact:777},
   ]

  return (
    <div>
        <h3>handle array with map</h3>
    {/* {
     student.map((data)=><p>{data.name},{data.email}</p>)
    } */}
     <table border={1}><tbody>

        <tr> 
            <th>sr.no</th>
            <th>name</th>
            <th>email</th>
            <th>contact</th>
        </tr>

     {
        student.map((data,id)=>
                    data.contact===777?
                       
                    <tr key={id}>
                        <td>{id+1}</td>
                    <td>{data.name}</td>
                    <td>{data.email} </td>
                    <td>{data.contact}</td>
                </tr>:null

     )}
          </tbody>

     </table>    
  

       {/* {
        for(let i=0;i<name.length;i++){
            <div>{name[i]}</div>
        }
       } */}


    </div>
  )
}

export default Mainlist
