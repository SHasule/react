
import React from "react";
class ComponentwillUnmountChild extends React.Component{
    componentWillUnmount(){
       // alert("ComponentwillUnmountChild call")
       console.log("ComponentwillUnmountChild call");
    }
    render(){
       return(
        <div>
            <h3>child component</h3>
           
        </div>
       )
    }
}
export default  ComponentwillUnmountChild
