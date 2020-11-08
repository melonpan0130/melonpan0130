import React, { Children } from "react"
import "./menubar.css"

class Dropdown extends React.Component {
    constructor(){
        super();
        this.isHovering = false;
    }
    
    onMouseOver(e) {
        this.isHovering = true;
        this.setState({});
    }

    onMouseLeave(e) {
        this.isHovering = false;
        this.setState({});
    }
    
    render() {
        return <div className="dropdown" onMouseOver={this.onMouseOver.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
            <a href="/" className="menu_item dropdown_title">News</a>
            <div className="dropdown_menu" style={{display:this.isHovering?'block':'none'}}>
                <a className="dropdown_item" href="/">NHK</a>
                <a className="dropdown_item" href="/">BBC</a>
            </div>
        </div>
    }
}

const Menubar = () => (
    <div id="menubar">
        {/* <a className="menu_item" href="/">Economy</a> */}
        <Dropdown>
        </Dropdown>
        <a className="menu_item" href="/">Etc</a>
    </div>
)

export default Menubar
