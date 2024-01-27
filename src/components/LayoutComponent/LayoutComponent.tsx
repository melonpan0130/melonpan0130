/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import Menubar from '../menubar';

const LayoutComponent: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      {/* <video autoPlay loop muted src={sampleVideo} type="video.mp4" /> */}
      <div id="main">
        <HeaderComponent siteTitle={data.site.siteMetadata.title} />
        <Menubar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          {/* <main>{children}</main> */}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  );
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  toc: PropTypes.node.isRequired,
};

export default LayoutComponent;
