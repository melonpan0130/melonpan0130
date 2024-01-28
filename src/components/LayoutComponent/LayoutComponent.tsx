/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { ApolloProvider } from '@apollo/client';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import client from '../../apolloClient';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';

const LayoutComponent: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query IndexPage {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div id="main">
          <HeaderComponent siteTitle={data.site.siteMetadata.title} />
          <div className="center">
            <main>{children}</main>
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ApolloProvider>
    </BrowserRouter>
  );
  /////
  // console.log('TEST_CEJ');
  // const data = useStaticQuery<Query>(graphql`
  //   query LayoutComponent {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //       }
  //     }
  //   }
  // `);

  // return (
  //   <ApolloProvider client={client}>
  //     <div id="main">
  //       <HeaderComponent siteTitle={data.site.siteMetadata.title} />
  //       <div className="center">
  //         <main>{children}</main>
  //       </div>
  //       <footer>
  //         © {new Date().getFullYear()}, Built with
  //         {` `}
  //         <a href="https://www.gatsbyjs.org">Gatsby</a>
  //       </footer>
  //     </div>
  //   </ApolloProvider>
  // );
};

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
