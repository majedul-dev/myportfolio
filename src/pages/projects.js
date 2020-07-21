import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../components/Title"
import Layout from "../components/Layout"
import Project from "./project"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProjects {
        edges {
          node {
            title
            projecturl
            githuburl
            category
            stack {
              id
              name
            }
            image {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allContentfulProjects.edges

  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ category: "all" })

  const getCategories = items => {
    let tempItems = items.map(item => {
      return item.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    return categories
  }

  useEffect(() => {
    setItems(projects)
    setCategories(getCategories(projects))
  }, [])

  const handleItems = e => {
    let value = e.target.value
    let tempItems = [...projects]
    if (value === "all") {
      setItems(tempItems)
    } else {
      let items = tempItems.filter(item => item.node.category === value)
      setItems(items)
    }
    setFilters(value)
  }
  return (
    <Layout>
      <section className="section">
        <Title title="projects" />
        <div className="project-category">
          <label>filter by technology</label>
          <select
            name="category"
            id="category"
            value={filters.category}
            onChange={handleItems}
            className="text-capitalize"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="projects section-center">
          {items.map((project, index) => {
            return <Project key={index} {...project} />
          })}
        </div>
      </section>
    </Layout>
  )
}
export default Projects
