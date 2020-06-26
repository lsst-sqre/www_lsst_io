/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const allDocSeries = [
    {
      key: 'SQR',
      name: 'SQuaRE Technotes',
    },
    {
      key: 'DMTN',
      name: 'Data Management Technotes',
    },
  ];

  allDocSeries.forEach(docSeries => {
    createPage({
      path: `/${docSeries.key.toLowerCase()}`,
      component: require.resolve(`./src/templates/docSeries.js`),
      context: { docSeries },
    });
  });
};
