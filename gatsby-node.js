/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions;

  const { data: docSeriesCategories } = await graphql(`
    query DocSeries {
      allDocSeriesYaml(sort: { fields: key, order: ASC }) {
        edges {
          node {
            key
            name
            notice
          }
        }
      }
    }
  `);

  docSeriesCategories.allDocSeriesYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.key.toLowerCase()}/`,
      component: require.resolve(`./src/templates/docSeries.js`),
      context: {
        docSeries: {
          ...node,
          description: `Browse and search Rubin Observatory ${node.key} documents.`,
        },
      },
    });
  });

  const { data: userGuideCollectionsData } = await graphql(`
    query UserGuideCollections {
      allGuideCollectionsYaml {
        edges {
          node {
            slug
            title
            tag
            description
          }
        }
      }
    }
  `);
  userGuideCollectionsData.allGuideCollectionsYaml.edges.forEach(({ node }) => {
    const { slug, title, tag, description } = node;
    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve(`./src/templates/guideCollection.js`),
      context: {
        title,
        tag,
        description,
      },
    });
  });
};
