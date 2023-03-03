import React from "react";
import "../../css/app.css"
import { MonthWidget } from "./month_widget";
import { ScrollBox } from "./scroll_box";

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris maximus vestibulum enim, eu volutpat ex consequat eu. Morbi nec urna sed tortor tempor convallis. Curabitur rhoncus erat vel orci pulvinar, sit amet porta odio semper. Vestibulum tincidunt imperdiet massa, vel faucibus purus cursus et. Quisque pretium erat vitae nulla imperdiet sodales. Praesent quis ligula vitae nulla aliquet rhoncus ut a sapien. Curabitur nec mauris at odio consectetur elementum. Nullam ut dapibus nibh. Vestibulum a quam a lorem rutrum condimentum et sit amet dui. Nulla sit amet efficitur dolor. Nam enim ante, auctor vel eleifend sed, blandit ac ante. Phasellus congue tortor vulputate volutpat imperdiet. Nullam vitae urna gravida, aliquet neque et, egestas tortor. Phasellus dictum enim at rutrum sodales. Suspendisse potenti. Nullam efficitur augue ut convallis tristique. Cras pharetra efficitur tellus, vitae mollis metus gravida pulvinar. Vestibulum dictum porttitor odio, non auctor ante. Nullam nec vulputate lorem. Sed non tristique neque. Nunc accumsan magna eu efficitur tempus. Sed imperdiet imperdiet elit, ut dictum est efficitur quis. Praesent pharetra semper tempus. Praesent aliquam porta mi, consequat malesuada velit. Fusce ornare nisl sed diam bibendum sollicitudin. Aliquam erat volutpat. Quisque convallis malesuada justo, et rutrum sapien fermentum ut. Maecenas quis facilisis justo. Vestibulum et dolor purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ultrices orci fringilla porttitor porta. Suspendisse efficitur lacinia semper. Etiam quis sodales erat. Quisque quis porttitor nulla. Donec quam augue, consectetur non ligula eget, faucibus dapibus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut ac dolor a mauris euismod accumsan ac et velit. Nunc facilisis vestibulum pretium. Integer feugiat accumsan fringilla. Morbi iaculis nunc ut tempus dignissim. Ut diam neque, ultrices ac bibendum at, pellentesque a nisi. Aliquam maximus accumsan felis, eget malesuada augue fermentum nec. Aenean suscipit est iaculis cursus interdum. Praesent non erat erat. Etiam in volutpat magna. Ut a diam aliquam, eleifend urna sed, tristique massa. Fusce id tristique ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed enim at nunc imperdiet congue ut ac velit. Duis fringilla dui eget nisi fermentum interdum. Duis imperdiet sapien vel tempus lobortis. Maecenas elit ipsum, cursus at convallis a, aliquet ut lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eget molestie ipsum. Vivamus blandit urna turpis, non aliquet elit dapibus vel. "
let elements: JSX.Element[] = [
    <div className="content" key="1">
        {text}
    </div>,
    <div className="content2" key="2">
        {text}
    </div>,
    <div className="content3" key="3">
        {text}
    </div>,
    <div className="content4" key="4">
        {text}
    </div>,
    <div className="content5" key="5">
        {text}
    </div>
]

type Props = {}
type State = {}

export class App extends React.Component<Props, State> {
    render(): React.ReactNode { return(<>
        <div className="App"><div className="app_contanier">
            <ScrollBox elements={elements}/>
        </div></div>
    </>) }
}