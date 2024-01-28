import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'gatsby';

import React from 'react';

const QUERY_SEARCH_BOARD: any = gql(`
query QUERY_SEARCH_BOARD {
  allMarkdownRemark(
    sort: { order: DESC, fields: frontmatter___date }
  ) {
    totalCount
    edges {
      node {
        excerpt(truncate: true, pruneLength: 200)
        id
        frontmatter {
          title
          path
          date(formatString: "YYYY-MM-DD HH:mm:ss")
        }
      }
    }
  }
}
`);

const QUERY_SEARCH_BOARD_FILTER: any = gql(`
query QUERY_SEARCH_BOARD_FILTER($filter: String! = "anatomy") {
  allMarkdownRemark(
    sort: { order: DESC, fields: frontmatter___date }
    filter: { frontmatter: { category: { eq: $filter } } }
  ) {
    totalCount
    edges {
      node {
        excerpt(truncate: true, pruneLength: 200)
        id
        frontmatter {
          title
          path
          date(formatString: "YYYY-MM-DD HH:mm:ss")
        }
      }
    }
  }
}
`);

const BoardComponent = ({ filter = '' }) => {
  let query: any = null;

  console.log('TEST_CEJ ');
  // console.log(params);
  if (filter !== '') {
    query = QUERY_SEARCH_BOARD_FILTER;
  } else {
    query = QUERY_SEARCH_BOARD;
  }
  const { data, loading } = useQuery(query, { variables: { filter: filter } });

  return (
    <ul id="home_list">
      {loading
        ? ` `
        : data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.frontmatter.path}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </Link>
            </li>
          ))}
    </ul>
  );
};

BoardComponent.propTypes = {
  filter: PropTypes.string,
};

BoardComponent.defaultProps = {
  filter: ``,
};

export default BoardComponent;
