import React from "react";
import "../../css/content.css"

import { HelloWeb } from "./hello_web";

export class Content extends React.Component {
    render () {return(<>
        <div className="Content">
            <HelloWeb/>
        </div>
    </>)}
}