import { CreatePagesArgs, graphql } from 'gatsby';
import path from 'path';
import { Query } from '../graphql-types';

export async function createPages({ actions, graphql }: CreatePagesArgs) {
  const { createPage } = actions;

  const { data, errors } = await graphql<Query>(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              path
            }
            tableOfContents(heading: "", absolute: false, maxDepth: 10, pathToSlugField: "")
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  const editedData = JSON.parse(JSON.stringify(data));

  editedData.allMarkdownRemark.edges.forEach(({ node }: any) => {
    createPage({
      path: node.frontmatter.path,
      context: {
        html: node.html,
        title: node.frontmatter.title,
        toc: node.tableOfContents,
        filter: node.frontmatter.path,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
}
