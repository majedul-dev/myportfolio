import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
        siteKeywords
      }
    }
  }
`

function SEO({ title, description, keywords }) {
  const { site } = useStaticQuery(query)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
    siteKeywords,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <link rel="canonical" href={`${siteUrl}/${title}`} />
      <meta name="description" content={description || siteDesc} />
      <meta name="keywords" content={keywords || siteKeywords} />
      <meta
        name="google-site-verification"
        content="SoTg-gsJVK6B0BjWDBge4c-NgGLR_xDuRekxi8ySK58"
      />
      <meta name="image" content={image} />
      {/* Open Graph meta tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="webdev" />
      {/* twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
