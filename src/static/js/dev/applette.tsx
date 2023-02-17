import React from "react"
import "../../css/applette.css"

import { Menu } from "./menu"
import { Content } from "./content"

export class Applette extends React.Component {
    render () {return(<>
        <div className="Applette">
            <Menu/>
            <Content/>
        </div>
    </>)}
}