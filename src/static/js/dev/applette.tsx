import React from "react"
import "../../css/applette.css"


type Props = { }
type State = { }
export class Applette extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {return(<>
        <div className="Applette">
            <h1>Hello Web</h1>
            <h2>made by Artem Kotenko</h2>
        </div>
    </>)}
}