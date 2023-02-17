import React from "react"
import "../../css/applette.css"

import { Menu } from "./menu"
import { Content } from "./content"

type Props = { }
type State = { content }
export class Applette extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            content: React.createRef()
        }
    }

    handlePageSelected = (event) => {
        this.state.content.current.changePage(event.selected_page)
    }

    handleModeChanged = (event) => {
        console.log(event.enable_dark_mode)
    }

    render () {return(<>
        <div className="Applette">
            <Menu
                onPageSelected={this.handlePageSelected}
                onModeChanged={this.handleModeChanged}
            />
            <Content
                ref={this.state.content}
            />
        </div>
    </>)}
}