import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from "../graphql-types"

import Layout from "./layout"
import SEO from "./seo"

const PostList: React.FC = ( graphqlString ) => {
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

export default PostList