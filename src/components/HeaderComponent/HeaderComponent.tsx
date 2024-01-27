import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import './HeaderComponent.scss';

const HeaderComponent = ({ siteTitle }) => (
  <header id="header" className="HeaderComponent">
    <Link to="/" className="title">
      {siteTitle}
    </Link>
  </header>
);

HeaderComponent.propTypes = {
  siteTitle: PropTypes.string,
};

HeaderComponent.defaultProps = {
  siteTitle: ``,
};

export default HeaderComponent;
