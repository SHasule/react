
import React from "react";

class Shouldcomponentupdate extends React.Component
     {
        constructor(){
            super()
                this.state={
                    count:0
                }
        }
        componentDidUpdate(){
            console.log("component did update");
        }
        shouldComponentUpdate(){
            console.log("Shouldcomponentupdate",this.state.count);
             if(this.state.count>2&&this.state.count<4){
                return true   
             }
        }
        render(){
            return(
                <div>
                <h3>Shouldcomponentupdate {this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count+1})}>update component</button>
                </div>
                
            )
        }
     }
     export default Shouldcomponentupdate