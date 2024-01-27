import { ApolloProvider } from '@apollo/client';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import client from '../apolloClient';
import BoardComponent from '../components/BoardComponent/BoardComponent';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import Menubar from '../components/menubar';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ApolloProvider client={client}>
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
          <BoardComponent />
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ApolloProvider>
  );
};

export default IndexPage;
