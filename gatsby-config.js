require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Majedul's Portfolio`,
    description:
      "I am full-stack web application developer with Node.js. I have beend doing web development about four years. I am comfortable to work with MERN(mongoDB, express, React, Node js) technologys. Web development is my passion. Since I had started learning web design and development I was very eager to learn more and more technologies. Long time I had passed on web development for learning.",
    author: "majedul",
    twitterUsername: "@mazedul_dev",
    image: "/twitter-img.png",
    siteUrl: "https://majedulislam.co",
    siteKeywords:
      " web development, web design, web application development, web app development, web application, website design, web application design and development, html5, css3, jsvascript, react js, node js, express js, mern stack project, mern stack application, mern stack web application",
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
