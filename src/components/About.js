import { Link } from "gatsby"
import React from "react"
import Title from "./Title"

const About = () => {
  return (
    <section className="section about-section">
      <Title title="About Me" />
      <div className="section-center">
        <p className="text-center">
          I am a full-stack web application developer. I have been doing web
          development for four years now. I have a great passion for coding in
          general. I have good hands-on experience with modern web application
          design and development. I would love to have some challenges for
          development. I have been done many advanced projects recently, some of
          them including in my projects section you shall get a touch in blew.
        </p>
      </div>
      <Link to="/about" className="btn center-btn">
        About More
      </Link>
    </section>
  )
}

export default About
