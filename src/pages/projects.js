import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import SEO from "../components/seo"

const ProjectsPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="projects" />
      <section className="section">
        <Projects projects={projects} title="all projects" />
      </section>
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

export default ProjectsPage
