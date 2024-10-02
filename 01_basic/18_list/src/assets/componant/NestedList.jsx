import React from 'react'

const NestedList = () => {
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
                hn: 10, city: "nashik", state: "maharastra",
            }]
        },
    ]

    return (
        <div className='app'>
            <h1>nested lis below</h1>
            <table style={{ background: "black", color: 'white' }}>
                <tbody>
                    <tr>
                        <th>sr.no</th>
                        <th>name</th>
                        <th>email</th>
                        <th>contact</th>
                        <th>address</th>
                    </tr>
             
                {
                    student.map((item,i) =>
                        <tr key={i}>
                             <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>
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
                                  </td>
                        </tr>

                    )}
                       </tbody>
            </table>


        </div>
    )
}

export default NestedList
