import React from "react";
import "../../css/gallery.css"

type Props = { }
type State = { }
export class Gallery extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {

        }
    }   

    render() { return (<>
        <div className="Gallery"><div className="grid_contanier">
            <div id="grid_box_1"></div>
            <div id="grid_box_2"></div>
            <div id="grid_box_3"></div>
            <div id="grid_box_4"></div>
            <div id="grid_box_5"></div>
            <div id="grid_box_6"></div>
            <div id="grid_box_7"></div>
            <div id="grid_box_8"></div>
            <div id="grid_box_9"></div>
            <div id="grid_box_10"></div>
            <div id="grid_box_11"></div>
        </div></div>
    </>)}
}