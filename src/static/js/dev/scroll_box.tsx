import React from "react";

import "../../css/scroll_box.css"


type Props = { elements: JSX.Element[] }
type State = { active_elements: JSX.Element[] }

export class ScrollBox extends React.Component<Props, State> {
    Ref: React.RefObject<HTMLDivElement>;
    elements: JSX.Element[];

    constructor(props) {
        super(props);
        this.Ref = React.createRef();
        this.elements = props.elements;
        this.state = {
            active_elements: this.elements, 
        }
        setTimeout(() => {
            if (this.Ref.current) this.Ref.current.scroll(0, 800 * 2)
        }, 0)
    }

    handleScroll = () => {
        if (this.Ref.current) {
            if (this.Ref.current.scrollTop < 800 * 2) {
                console.log("triger top")
                this.elements.splice(0, 0, this.elements[this.elements.length-1])
                this.elements.splice(this.elements.length-1,1)
                if (this.Ref.current) this.Ref.current.scroll(0, 800 * 3)
                this.setState({
                    active_elements: this.elements,
                })        
            }
            console.log(this.Ref.current.scrollTop);
        }
    }

    render = () => {
        
        return (<div 
            className="ScrollBox"
            ref={this.Ref}
            onScroll={this.handleScroll}>
            {this.elements.map((element) => {return element})}
        </div>)
    }
}
