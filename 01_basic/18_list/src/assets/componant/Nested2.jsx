
import React from 'react'

const Nested2 = () => {
    const student = [
        {
            name: "peter", email: "peter@text", contact: 777, address: [{
                hn: 12, city: "pune", state: "maharastra",
                hn: 17, city: "mumbai", state: "maharastra",
                hn: 10, city: "nashik", state: "maharastra",
            }]
        },
        {
            name: "jaya", email: "jaya@text", contact: 977, address: [{
                hn: 12, city: "pune", state: "maharastra",
                hn: 17, city: "mumbai", state: "maharastra",
                hn: 10, city: "nashik", state: "maharastra",
            }]
        },
        {
            name: "sachin", email: "sachin@text", contact: 777, address: [{
                hn: 12, city: "pune", state: "maharastra",
                hn: 17, city: "mumbai", state: "maharastra",
                hn: 10, city: "nashik", state: "maharastra",
            }]
        },
        {
            name: "virat", email: "virat@text", contact: 777, address: [{
                hn: 12, city: "pune", state: "maharastra",
                hn: 17, city: "mumbai", state: "maharastra",
                // hn: 10, city: "nashik", state: "maharastra",
            }]
        },
    ]
    return (
        <div className='app'>
            <h1>nested list below</h1>
            <table style={{ background: "black", color: 'white' }}>
                <tbody>
                    <tr>
                      <th>address</th>
                        <th>sr.no</th>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                        
                    </tr>
             
                {
                    student.map((item,i) =>
                        <tr key={i}>
                             <table>
                                    <tbody>
      
                                {
                                  item.address.map((data)=>

                                    <tr>
                                    <td>{data.hn}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>
                                    
                                </tr>
                                  
                                  )}
                                  </tbody>
                                   </table>
                             <td>{i+1}</td>
                            <td>{item.name}</td>
                            
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
                                
                                  </td>
                        </tr>

                    )}
                       </tbody>
            </table>


        </div>
    )
}


    
export default Nested2
