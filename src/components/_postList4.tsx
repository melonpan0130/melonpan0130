import React from "react"
import PropTypes, { string } from "prop-types"
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import { Query } from '../graphql-types'
// import * as gql_query_builder from 'gql-query-builder'

// import { useQuery, gql } from '@apollo/client'

import Layout from "./layout"
import SEO from "./seo"

// function PostList() {
export function PostList( categoryPath: string ) {

  var graphqlString = `
    query PostList ($categoryPath: String ) {
        allMarkdownRemark (sort: { order: DESC, fields: frontmatter___date }, filter:{frontmatter:{category:{eq: $categoryPath}}} ) {
            edges {
                node {
                    excerpt(truncate: true, pruneLength: 200)
                    frontmatter {
                        title
                        path
                        date(formatString: "YYYY-MM-DD HH:mm:ss")
                    }
                    id
                }
            }
        }
    }
  `;

  fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      graphqlString,
      variables: { categoryPath }
    })
  }).then(data => {

    return (
      <Layout>
        <SEO title="Home" />
        <ul id="home_list">
          {
            // data.allMarkdownRemark.edges.map(({node}) => (
            //   <li key={node.id}>
            //     <Link to={node.frontmatter.path}>
            //       <h3>{node.frontmatter.title}</h3>
            //       <p>{node.frontmatter.date}</p>
            //       <p>{node.excerpt}</p>
            //     </Link>
            //   </li>
            // ))
          }
        </ul>
      </Layout>
    )
  })
};

// PostList.defaultProps = {
//   categoryPath: null
// }

// PostList.propTypes = {
//   categoryPath: PropTypes.string
// }

export default PostList