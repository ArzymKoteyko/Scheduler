import React from "react";
import "../../css/content.css"

import { HelloWeb } from "./hello_web";
import { About } from "./about";
import { Gallery } from "./gallery";
import { SignUp } from "./sign_up";
import { Roulette } from "./roulette";

type Props = { }
type State = { selected_page }
export class Content extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            selected_page: "home"
        }
    }

    changePage = (page_type) => {
        this.setState({
            selected_page: page_type
        })
    }

    render () {return(<>
        <div className="Content">{(() => {
            if(this.state.selected_page == "home") return(
                <HelloWeb/>
            )
            else if (this.state.selected_page == "about") return(
                <About/>
            )
            else if (this.state.selected_page == "gallery") return(
                <Gallery/>
            )
            else if (this.state.selected_page == "sign up") return(
                <SignUp/>
            )
            else if (this.state.selected_page == "roulette") return(
                <Roulette/>
            )
            else return(
                <></>
            )
        })()}</div>
    </>)}
}