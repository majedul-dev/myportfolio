import { Link } from "gatsby"
import React from "react"
import Title from "./Title"

const About = () => {
  return (
    <section className="section about-section">
      <Title title="About Me" />
      <div className="section-center">
        <p className="text-center">
          I am full-stack web application developer with Node.js. I have beend
          doing web development about four years. I am comfortable to work with
          MERN(mongoDB, express, React, Node js) technologys. Web development is
          my passion. Since I had started learning web design and development I
          was very eager to learn more and more technologies. Long time I had
          passed on web development for learning.
        </p>
      </div>
      <Link to="/about" className="btn center-btn">
        About More
      </Link>
    </section>
  )
}

export default About
