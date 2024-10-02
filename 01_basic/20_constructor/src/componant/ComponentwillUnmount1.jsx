import ComponentwillUnmountChild from "./ComponentwillUnmountChild";
import React from "react";
class ComponentwillUnmount1 extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.show ? <ComponentwillUnmountChild /> : <h2>child removed</h2>
                }
                <button onClick={() => this.setState({ show: !this.state.show })}>hide toggle</button>
            </div>
        )
    }
}
export default ComponentwillUnmount1