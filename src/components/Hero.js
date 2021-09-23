import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'am majedul</h1>
            <h4>freelance modern web designer & developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <a
              href="https://drive.google.com/file/d/1M4-EXvpwmSTTSDrpUgvDU_gB9QtRTLma/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{ marginLeft: "1rem" }}
            >
              My Resume
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
