module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby Starter`,
    author: `@nirnejak`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter`,
        short_name: `gatsby-starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
