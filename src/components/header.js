import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../css/header.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="header">
    <div id="title">
      <h1>
        <Link id="titleLink" to="/">{siteTitle}</Link>
      </h1>
      <p>{siteDescription}</p>
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
