
import React, { useDebugValue } from 'react'

class Render extends React.Component

{
    constructor(){
        super();
        this.state={
            email:"suraj@gmail.com"
        }
    }
    render(){
        // console.log("render",this.props)
        console.log("render",this.state.email);
         return(
          
            <div>
                {/* <h3>render method{this.props.name}</h3> */}
                <button onClick={()=>this.setState({email:"siddu@gmail.com"})}>update email</button>
            </div>
         )
    }
}

export default Render
