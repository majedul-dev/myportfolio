import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className={`section ${showLink && "blog-section"}`}>
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map((blog, index) => {
          return <Blog key={index} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to="/blogs" className="btn center-btn">
          all blogs
        </Link>
      )}
    </section>
  )
}

export default Blogs
