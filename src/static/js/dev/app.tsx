import React from "react"
import "../../css/app.css"

import { Applette } from "./applette"


export class App extends React.Component {
    render () {return(<>
        <div className="App">
            <Applette/>
        </div>
    </>)}
}