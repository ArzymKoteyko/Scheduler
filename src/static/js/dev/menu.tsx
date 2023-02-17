import React from "react";
import "../../css/menu.css"
import { DropDown } from "./drop_down";

import { Switch } from "./switch";

type Props = { onModeChanged, onPageSelected }
type State = { }
export class Menu extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            enable_dark_mode: false,
            selected_page: "home"
        }
    }

    handleSwitch = (event) => {
        this.setState({
            enable_dark_mode: event.state
        })
        this.props.onModeChanged({enable_dark_mode: event.state})
    }

    handleItemSelected = (event) => {
        this.setState({
            selected_page: event.item_name
        })
        this.props.onPageSelected({selected_page: event.item_name})
    }

    render () {return(<>
        <div className="Menu">
            <div className="menu_switch_contanier"><Switch 
                onSwitch={this.handleSwitch}
            /></div>
            <div className="menu_mode_icon_contanier">
                <div className="menu_mode_icon"></div>
            </div>
            <div className="menu_filler"></div>
            <div className="menu_dropdown_contanier"><DropDown
                onItemSelected={this.handleItemSelected}            
            /></div>
        </div>
    </>)}
}