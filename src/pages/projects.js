import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Projects from "../components/Projects"

const ProjectsPage = ({
  data: {
    allContentfulProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
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
