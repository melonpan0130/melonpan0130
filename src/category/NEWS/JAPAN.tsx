import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from '../../graphql-types';
import path from 'path';
import Layout from "../../components/layout"
import Image from "../../components/image"
import SEO from "../../components/seo"

import "../css/index.css"

const LatestPostListQuery2 = graphql`
        query LatestPostListQuery2 {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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

const news_japan_Page: React.FC = () => {
  const data = useStaticQuery<Query>(LatestPostListQuery2);
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

export default news_japan_Page
