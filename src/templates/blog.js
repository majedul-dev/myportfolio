import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const blog = ({ data }) => {
  const { content, title, description, keywords, slug } = data.contentfulBlogs
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Layout>
      <SEO
        title={title}
        slug={`blogs/${slug}`}
        description={description}
        keywords={keywords}
      />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            {documentToReactComponents(content.json, options)}
          </article>
          <Link to="/blogs" className="btn center-btn">
            Back to Blogs
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    contentfulBlogs(slug: { eq: $slug }) {
      title
      description
      keywords
      slug
      content {
        json
      }
    }
  }
`

export default blog
