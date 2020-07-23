import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const project = ({ data }) => {
  const { aboutproject } = data.contentfulProjects
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
