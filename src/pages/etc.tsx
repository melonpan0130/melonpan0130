import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from '../graphql-types'

import Layout from "../components/layout"
import SEO from "../components/seo"
import {PostList} from "../components/_postList4"

const categoryPath = "news/japan";

const getCategoryEtc = graphql<Query>(`
query PostList {
    allMarkdownRemark (sort: { order: DESC, fields: frontmatter___date }, filter:{frontmatter:{category:${categoryPath}}} ) {
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
`);

    
const CategoryEtc: React.FC = () => {
  const data = useStaticQuery<Query>(getCategoryEtc);
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

//   return (PostList("news/japan"));
    // return <PostList categoryPath="/etc"></PostList>
};

export default CategoryEtc