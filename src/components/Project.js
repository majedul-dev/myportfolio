import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { FaShareSquare, FaGithub } from "react-icons/fa"

const Project = ({ title, projecturl, githuburl, stack, image, slug }) => {
  return (
    <article className="single-project">
      <div className="image-wrapper">
        <Image fluid={image.fluid} className="img" alt="" />
      </div>
      <div className="content-wrapper">
        <a
          href={projecturl}
          target="_blank"
          rel="noreferrer"
          className="fa-share-square"
        >
          <FaShareSquare className="share-icon" />
        </a>
        <div className="project-info">
          <h4>{title}</h4>
          <div className="stack-items">
            {stack.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="single-project-footer">
        <a href={githuburl} target="blank">
          <i className="fab fa-github">
            <FaGithub />
          </i>
        </a>
        <Link to={`/projects/${slug}`}>About Project</Link>
        <a href="" target="_blank" rel="noreferrer">
          source code
        </a>
      </div>
    </article>
  )
}

export default Project
