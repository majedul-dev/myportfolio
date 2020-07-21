import React from "react"
import Layout from "../components/Layout"
import Projects from "./projects"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Projects />
  </Layout>
)

export default IndexPage
