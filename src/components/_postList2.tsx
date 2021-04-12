import React from "react"
import PropTypes, { string } from "prop-types"
import { Link, graphql, useStaticQuery, StaticQuery } from "gatsby"
import { Query } from '../graphql-types'

import { useQuery, gql } from '@apollo/client'

import Layout from "./layout"
import SEO from "./seo"

interface PostItem {
  id: number;
  frontmatter: {
    path: string;
    title: string;
    date: string;
  }
  excerpt: string;
}

interface PostItemList {
  itemList: PostItem[];
}

interface PostItemVars {
  categoryPath: string;
}

// function PostList() {
export function PostList( categoryPath: string ) {

  const graphqlString = gql`
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

  // const data = useStaticQuery<Query>(graphqlString
  //   ,{variables: {categoryPath: categoryPath}});
  // const data = StaticQuery<Query>(graphqlString,
  //   { variables: {categoryPath: categoryPath}});
  
  // const data = useStaticQuery<Query>(graphqlString,
  //   {"categoryPath": categoryPath});
  
  const {data} = useQuery<PostItemList, PostItemVars>(
    graphqlString,
    {variables: {categoryPath: categoryPath}}
  );

  // const data = useStaticQuery({query: graphqlString, render: {}})

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
          data.itemList.map((node) => (
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

// export default PostList