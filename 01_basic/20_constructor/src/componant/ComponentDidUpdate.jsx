
import React from "react";

class ComponentDidUpdate extends React.Component{
    constructor(){
        super();
        // console.log("constructor did update");
        // this.state={
        //     name:"java"
        // }
        this.state={
            count:0
        }

    }
    ComponentDidUpdate(preProps,PreState,snapshot){
        console.log("ComponentDidUpdate ",PreState.count,this.state.count);
     //
     
     this.setState({count:this.state.count+1})
    }
    render(){
        // console.log("render did update");
        return(
            <div>
                {/* <h2>ComponentDidUpdate {this.state.name}</h2> */}
                {/* <button onClick={()=>(this.setState({name:"react"}))}> DidUpdate</button> */}

               <h2> componant update {this.state.count}</h2>
               <button onClick={()=>{this.setState({count:1})}}>update count</button>
            </div>
        )
    }
}
export default ComponentDidUpdate