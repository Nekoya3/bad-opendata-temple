module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-contents`,
        path: `${__dirname}/src/contents/markdown`,
      },
    },
      `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`
  ],
}
