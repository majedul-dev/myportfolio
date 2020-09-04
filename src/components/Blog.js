import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Blog = ({ id, title, slug, date, image, category, description }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog">
      <article>
        <Img fluid={image.fluid} className="blog-img" alt={title} />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Blog
