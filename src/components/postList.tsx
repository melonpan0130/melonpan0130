import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from '../graphql-types';
import path from 'path';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// function PostList() {
function PostList( categoryPath: string ) {

  const graphqlString = `
    query PostList {
        allMarkdownRemark (sort: { order: DESC, fields: frontmatter___date }, filter:{frontmatter:{category:{eq: ${categoryPath}}}} ) {
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

  const data = useStaticQuery<Query>(graphqlString);
  return (
    <Layout>
      <SEO title="Home" />
      <ul id="home_list">
        {
          data.allMarkdownRemark.edges.map(({node}) => (
            <li key={node.id}>
              <Link to={node.frontmatter.path}>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
              </Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
};

// PostList.defaultProps = {
//   categoryPath: null
// }

// PostList.propTypes = {
//   categoryPath: PropTypes.string
// }

export default PostList