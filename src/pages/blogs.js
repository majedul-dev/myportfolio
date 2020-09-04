import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/seo"

const blog = ({
  data: {
    allContentfulBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="blogs" />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogs {
      nodes {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        category
        description
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default blog
