import React from "react";
import "../../css/drop_down.css"

type Props = { onItemSelected }
type State = { is_open, selected_item_name }
export class DropDown extends React.Component<Props, State> {
    constructor (props) {
        super(props)
        this.state = {
            is_open: false,
            selected_item_name: "home"
        }
    }

    handleDropClick = (event) => {
        this.setState({
            is_open: this.state.is_open ? false : true,
        })
    }

    handleSelectClick = (event) => {
        this.setState({
            selected_item_name: event.target.innerHTML
        })
        this.props.onItemSelected({item_name: event.target.innerHTML})
    }


    render () {return(<>
        <div className="DropDown">
            <div className="selected_item">
                <h3 onClick={this.handleDropClick}>{this.state.selected_item_name}</h3>
                <div 
                    className="drop_down_icon" 
                    onClick={this.handleDropClick}
                    style={{
                        transform: this.state.is_open ? "scale(1, -1)" : "scale(1, 1)",
                    }}
                >
                </div>
            </div>
            <ul 
                style={{
                    height: this.state.is_open ? "fit-content" : 0,
                }}
            >
                <li><h3 onClick={this.handleSelectClick}>home</h3></li>
                <li><h3 onClick={this.handleSelectClick}>about</h3></li>
                <li><h3 onClick={this.handleSelectClick}>gallery</h3></li>
                <li><h3 onClick={this.handleSelectClick}>sign up</h3></li>
                <li><h3 onClick={this.handleSelectClick}>roulette</h3></li>
            </ul>
        </div>
    </>)}
}