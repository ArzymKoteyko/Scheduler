import React from "react";
import "../../css/menu.css"
import { DropDown } from "./drop_down";

import { Switch } from "./switch";

export class Menu extends React.Component {

    handleSwitch(event) {
        console.log(event.state)
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
                // params            
            /></div>
        </div>
    </>)}
}