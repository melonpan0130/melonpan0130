import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="header">
    <div>
      <h1>
        <link to="/">{siteTitle}</link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
