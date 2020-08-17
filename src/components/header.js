import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"
import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"

const Header = ({ siteTitle, siteDescription }) => (
  <header id="header">
    <div id="title">
      <h1>
        <Link id="titleLink" to="/">{siteTitle}</Link>
      </h1>
      <p>{siteDescription}</p>
    </div>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary">Economy</button>
      <button type="button" class="btn btn-secondary">News</button>
      <button type="button" class="btn btn-secondary">Etc</button>
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
