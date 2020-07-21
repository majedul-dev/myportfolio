import React from "react"
import Projects from "./projects"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
  </Layout>
)

export default IndexPage
