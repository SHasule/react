
import React from 'react'

class Constructor extends React.Component
          {
            constructor(){
                super(); //super is js part
                console.log("first Constructor");
                this.state={
                    data:"suraj"
                }
            }
            render(){
                return(
                    console.log("render"),
                    <h3>hello  {this.state.data}</h3>
                )
            }
          }
    
export default Constructor