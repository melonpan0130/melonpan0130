import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Query } from '../graphql-types';

// import LayoutComponent from '../components/LayoutComponent';
import LayoutComponent from '../components/LayoutComponent/LayoutComponent';
import SEO from '../components/seo';

const getCategoryDesignPattern = graphql`
  query CategoryDesignPatternQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { category: { eq: "design_pattern" } } }
    ) {
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

const CategoryDesignPattern: React.FC = () => {
  console.log('TEST_CEJ CategoryDesignPattern');
  const data = useStaticQuery<Query>(getCategoryDesignPattern);
  return (
    <LayoutComponent>
      <SEO title="Home" />
      <ul id="home_list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.path}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </LayoutComponent>
  );
};

export default CategoryDesignPattern;
