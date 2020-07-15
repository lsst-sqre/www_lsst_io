module.exports = {
  siteMetadata: {
    title: `Vera Rubin Observatory Documentation`,
    description: `Find Vera Rubin Observatory documentation and open source projects.`,
    author: `@VRubinObs`,
    siteUrl: `https://www.lsst.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vera Rubin Observatory Documentation`,
        short_name: `Rubin Docs`,
        start_url: `/`,
        background_color: `#E0FCFF`,
        theme_color: `#0A6C74`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/icons/,
        },
      },
    },
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.lsst.io`,
        stripQueryString: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
