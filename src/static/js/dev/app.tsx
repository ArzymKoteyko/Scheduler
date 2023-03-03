
import React from "react";
import "../../css/app.css"
import { UserPanel } from "./UserPanel";

type Props = {}
type State = {}

export class App extends React.Component<Props, State> {
    render(): React.ReactNode { return(<>
        <div className="App"><div className="app_gradient">
            <UserPanel/>
            <UserPanel/>
            <UserPanel/>
            <UserPanel/>
        </div></div>
    </>) }
}