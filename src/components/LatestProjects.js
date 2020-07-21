import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import LatestProject from "./LatestProject"

const LatestProjects = ({ projects, title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="projects section-center">
        {projects.slice(0, 3).map(project => (
          <LatestProject key={project.id} {...project} />
        ))}
      </div>
      <Link to="/projects" className="btn center-btn">
        projects
      </Link>
    </section>
  )
}

export default LatestProjects
