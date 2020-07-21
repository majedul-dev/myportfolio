import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
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
        <Title title="projects" />
        <Projects projects={projects} />
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
