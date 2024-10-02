import React from "react";
 class ComponentDidMount extends React.Component{

    constructor(){
        super();
        // console.log("constructor");
        this.state={
            name:"raj"
        }
    }
    componentDidMount(){
        console.log("componentdidmount");
        
    }
    render(){
        // this.setState({name:"mahesh"})
        console.log("render");
        return(
            <div>
                <h3>ComponentDidMount {this.state.name}</h3>
                <button onClick={()=>(this.setState({name:"mahesh"}))}>update didmount</button>
            </div>
        );
    }
 }
 export default ComponentDidMount