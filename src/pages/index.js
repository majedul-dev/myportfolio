import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import LatestProjects from "../components/LatestProjects"

const IndexPage = ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
  } = data
  console.log(projects)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <LatestProjects projects={projects} title="latest projects" />
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        title
        projecturl
        githuburl
        category
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
