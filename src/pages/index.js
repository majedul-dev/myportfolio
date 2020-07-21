import React from "react"
// import Projects from "./projects"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    {/* <Projects /> */}
  </Layout>
)

export default IndexPage
