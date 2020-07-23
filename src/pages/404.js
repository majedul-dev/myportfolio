import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="section error-page">
      <div className="section-center">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <Link to="/" className="btn center-btn">
          Back to home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
