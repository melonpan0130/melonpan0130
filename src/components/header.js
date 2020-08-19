import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="header">
    <div id="title">
      <h1>
        <Link id="titleLink" to="/">{siteTitle}</Link>
      </h1>
      <p>{siteDescription}</p>
    </div>
    <div id="menubar">
        <a class="menu_item" href="#">Economy</a>
        <div class="dropdown">
            <a href="#" class="menu_item dropdown_title">News</a>
            <div class="dropdown_menu">
                <a class="dropdown_item" href="#">NHK</a>
                <a class="dropdown_item" href="#">BBC</a>
            </div>
        </div>
        <a class="menu_item" href="#">Etc</a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription : PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``
}

export default Header
