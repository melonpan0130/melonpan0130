import { CreatePagesArgs, graphql } from 'gatsby';
import path from 'path';
import { Query } from '../graphql-types';

export async function createCategory({ actions, graphql }: CreatePagesArgs) {
    const { createPage } = actions;
    
    const { data, errors } = await graphql<Query>(`
            {
                allMarkdownRemark (sort: { order: DESC, fields: frontmatter___date }}}) {
                    edges {
                        node {
                            html
                            frontmatter {
                                title
                                path
                            }
                        }
                    }
                }
            }
        `);

        // (sort: { order: DESC, fields: frontmatter___date }, filter:{frontmatter:{category:{eq: $categoryPath}}})

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
            },
            component: path.resolve(__dirname, '../templates/CategoryTemplate.tsx'),
        });
    });
}