
//ComponentwillUnmountPRAC1
import ComponentwillUnmuntPRACChild from "./ComponentwillUnmuntPRACChild";
    import React from "react";
     class ComponentwillUnmountPRAC1 extends React.Component
          {
            constructor(){
                super();
                this.state={
                    name:true
                }
            }
            
            render(){
                return(
                    <div>
                        {
                   
                            this.state.name ? <ComponentwillUnmuntPRACChild /> : <h2>removed component</h2>
                        }       
                    <button onClick={()=>this.setState({name:!this.state.name})}>change component </button>
                    </div>
                )
            }
          }
 export default ComponentwillUnmountPRAC1