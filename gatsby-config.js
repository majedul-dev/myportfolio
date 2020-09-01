require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Majedul's Portfolio`,
    description:
      "The modern web application is the way for grow any sort of business. We are here to provide quality service about web application development. A fast and responsive website is the ideal for any comparative company or business.",
    author: "majedul",
    twitterUsername: "@mazedul_dev",
    image: "/twitter-img.png",
    siteUrl: "https://majedulislam.co",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
