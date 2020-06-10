module.exports = {
  pathPrefix: "/jjm",
  siteMetadata: {
    title: `Jennifer Marco: Therapist`,
    description: `Therapy, Anger Management & Court and Legal Evauations`,
    author: `Jennifer Marco`,
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
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-react-bootstrap`,
        short_name: `react-bootstrap`,
        start_url: `http://jennifermarco.com/`,
        background_color: `#ff8f40`,
        theme_color: `#ff8f40`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
