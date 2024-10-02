//ComponentwillUnmuntPRACChild

import React from "react";
class ComponentwillUnmuntPRACChild extends React.Component
     {
        componentWillUnmount(){
            alert("changed");
            
        }
       
       render(){
           return(
               <div>
               <h3>practice component</h3>
               
               </div>
           )
       }
     }
export default ComponentwillUnmuntPRACChild