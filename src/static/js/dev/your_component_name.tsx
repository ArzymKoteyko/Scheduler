import React from "react"

import "../../css/your_component_name.css"

export class YourComponentName extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            // name starts with <on>
            onAnyCallBack: props.onAnyCallback,
        }
    }

    // name can not start with <handle> or <on>
    anyOrdinaryMethod = () => {

    }

    // Any Callback handler
    // name starts with <handle> 
    handleSomeCallback = (event) => {

    }

    render() {return (<>
        <div 
            className="YourComponentName"
        >
            COMPONENT INER HTML
        </div>
    </>)}
}
