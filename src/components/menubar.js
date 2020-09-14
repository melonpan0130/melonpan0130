// $(document).ready(function() {
//     var $dropdown_title = $(".dropdown_title");
//     var $dropdown_menu = $(".dropdown_menu");

//     $dropdown_title.on({
//         "mouseover" : function() {
//             $(".dropdown_menu").css({
//                 "display" : "block",
//             });
//             console.log('hello');
//         },
//         "mouseleave" : function() {
//             $(".dropdown_menu").css({"display" : "none"});
//             console.log('hello');
//         }
//     });

//     $dropdown_menu.on({
//         "mouseover" : function() {
//             $(".dropdown_menu").css("display", "block");
//         },
//         "mouseleave" : function() {
//             $(".dropdown_menu").css("display", "none");
//         }
//     });
// });

// window.onload = function() {

//     function dropdown_mouseover()
//     {
//         alert("hello");
//     }
    // var dropdown_title = document.getElementsByClassName("dropdown_title");
    // var dropdown_menu = document.getElementsByClassName("dropdown_menu");

    // dropdown_title[0].on({
    //     "mouseover" : function() {
    //         dropdown_menu[0].css("display", "block");
    //     },
    //     "mouseleave" : function() {
    //         dropdown_menu[0].css("display", "none");
    //     }
    // });

    // dropdown_menu[0].on({
    //     "mouseover" : function() {
    //         dropdown_menu[0].css("display", "block");
    //     },
    //     "mouseleave" : function() {
    //         dropdown_menu[0].css("display", "none");
    //     }
    // });
// }

// window.onload = function ()
// {

// }

import React, { Children } from "react"
import "./menubar.css"
import { element } from "prop-types";

const dropdown_mouseover = (e) => {

    const dropdown_title = document.querySelector('.dropdown_title');
    const dropdown_menu = document.querySelector('.dropdown_menu');
    console.log('dropdown menu : '+dropdown_menu);

    
    // dropdown_menu.setAttribute('display', 'block');

    // dropdown_menu.target.style.display = 'block';

    // var dropdown_title = document.getElementsByClassName("dropdown_title");
    // var dropdown_menu = document.getElementsByClassName("dropdown_menu");

    // dropdown_title[0].on({
    //     "mouseover" : function() {
    //         dropdown_menu[0].css("display", "block");
    //     },
    //     "mouseleave" : function() {
    //         dropdown_menu[0].css("display", "none");
    //     }
    // });
    
    // dropdown_menu[0].on({
    //     "mouseover" : function() {
    //         dropdown_menu[0].css("display", "block");
    //     },
    //     "mouseleave" : function() {
    //         dropdown_menu[0].css("display", "none");
    //     }
    // });
}

// class Example extends Dropdown {
//     constructor() {
//         super()
//         this.state = {
//             options: [
//                 { name: 'Option 1', value: '1234' },
//                 { name: 'Option 2', value: '5678' },
//                 { name: 'Option 2', value: '91011' }
//             ],
//         }
//     }
//     render() {
//       return <Dropdown {...this.state.props} />
//     }
// }

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
        <a className="menu_item" href="/">Economy</a>
        <Dropdown>
        </Dropdown>
        <a className="menu_item" href="/">Etc</a>
    </div>
)

export default Menubar
