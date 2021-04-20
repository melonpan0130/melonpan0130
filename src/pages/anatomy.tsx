import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from '../graphql-types'

import Layout from "../components/layout"
import SEO from "../components/seo"

const getCategoryAnatomy = graphql`
        query CategoryAnatomyQuery {
            allMarkdownRemark (sort: { order: DESC, fields: frontmatter___date }, filter:{frontmatter:{category:{eq:"anatomy"}}} ) {
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

const CategoryAnatomy: React.FC = () => {
  const data = useStaticQuery<Query>(getCategoryAnatomy);
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
  );
};

export default CategoryAnatomy