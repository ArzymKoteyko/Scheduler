import React from "react";
import "../../css/switch.css"


type Props = { onSwitch };
type State = { onSwitch, state };
export class Switch extends React.Component<Props, State> {
    constructor (props) {
        super(props)
        this.state = {
            state: false,
            onSwitch: props.onSwitch ?? ((event) => {}),
        }
    }

    handleClick = (event) => {
        this.state.onSwitch({state: !this.state.state})
        this.setState({
            state: this.state.state ? false : true,
        })
    }

    render () {return(<>
        <div className="Switch">
            <div 
                className="slider" 
                onClick={this.handleClick}
            ></div>
            <div 
                className="knob" 
                onClick={this.handleClick}
                style={{
                    "left": this.state.state ? 30 : 0,
                }}
            ></div>
        </div>
    </>)}
}