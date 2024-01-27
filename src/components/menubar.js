import React from 'react';
import '../css/menubar.css';

class Dropdown extends React.Component {
  constructor() {
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
    return (
      <div
        role="presentation"
        className="dropdown"
        onFocus={this.onMouseOver.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        {/* onMouseOver={this.onMouseOver.bind(this)} */}
        <p className="menu_item dropdown_title">News</p>
        <div className="dropdown_menu" style={{ display: this.isHovering ? 'block' : 'none' }}>
          <a className="dropdown_item" href="/news/japan">
            Japan
          </a>
          <a className="dropdown_item" href="/news/us">
            US
          </a>
        </div>
      </div>
    );
  }
}

const Menubar = () => (
  <div id="menubar">
    {/* <a className="menu_item" href="/">Economy</a> */}
    <Dropdown></Dropdown>
    <a className="menu_item" href="/design_pattern">
      Design Pattern
    </a>
    <a className="menu_item" href="/anatomy">
      Anatomy
    </a>
    <a className="menu_item" href="/etc">
      Etc
    </a>
  </div>
);

export default Menubar;
