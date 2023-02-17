import React from "react";
import "../../css/about.css"

type Props = { }
type State = { }
export class About extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {

        }
    }   

    render() { return (<>
        <div className="About">
            <div className="simple_contanier">
                <h3>creator: Artem Kotenko</h3>
                <h3>version: 1.0</h3>
                <h3>github: <a href="https://github.com/ArzymKoteyko">ArzymKoteyko</a></h3>
                <h3>licence: <a href="http://www.openbsd.org/policy.html">BSD 3-Clause License</a></h3>
            </div>
        </div>
    </>)}
}