/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  const docSeriesCategories = [
    {
      key: 'DMTN',
      name: 'Data Management Technotes',
    },
    {
      key: 'DMTR',
      name: 'Data Management Test Reports',
    },
    {
      key: 'ITTN',
      name: 'IT Technotes',
    },
    {
      key: 'ITTN',
      name: 'IT Technotes',
    },
    {
      key: 'LDM',
      name: 'LSST Data Management',
    },
    {
      key: 'LPM',
      name: 'LSST Project Management',
    },
    {
      key: 'LSE',
      name: 'LSST Systems Engineering',
    },
    {
      key: 'OPSTN',
      name: 'Operations Technotes',
    },
    {
      key: 'PSTN',
      name: 'Project Science Team Technotes',
    },
    {
      key: 'RTN',
      name: 'Rubin Technotes',
    },
    {
      key: 'SMTN',
      name: 'Simulations Technotes',
    },
    {
      key: 'SITCOMTN',
      name: 'Systems Integration, Testing, and Commissioning Technotes',
    },
    {
      key: 'SQR',
      name: 'SQuaRE Technotes',
    },
    {
      key: 'TSTN',
      name: 'Telescope & Site Technotes',
    },
  ];

  docSeriesCategories.forEach(docSeries => {
    createPage({
      path: `/${docSeries.key.toLowerCase()}/`,
      component: require.resolve(`./src/templates/docSeries.js`),
      context: {
        docSeries: {
          ...docSeries,
          description: `Browse and search Rubin Observatory ${docSeries.key} documents.`,
        },
      },
    });
  });
};
