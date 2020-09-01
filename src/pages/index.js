import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"

const IndexPage = ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects projects={projects} title="latest projects" showLink />
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProjects(limit: 3) {
      nodes {
        title
        projecturl
        githuburl
        category
        slug
        id
        stack {
          id
          name
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
export default IndexPage
