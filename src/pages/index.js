import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

const IndexPage = ({ data }) => {
  const {
    allContentfulProjects: { nodes: projects },
    allContentfulBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects projects={projects} title="latest projects" showLink />
      <Blogs blogs={blogs} title="latest blogs" showLink />
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

    allContentfulBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        category
        description
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
