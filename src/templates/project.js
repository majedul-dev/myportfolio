import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const project = ({ data }) => {
  const { aboutproject, title } = data.contentfulProjects
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
      <SEO title={title} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            {documentToReactComponents(aboutproject.json, options)}
          </article>
          <Link to="/projects" className="btn center-btn">
            Back to projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      aboutproject {
        json
      }
    }
  }
`

export default project
