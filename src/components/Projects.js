import React, { useState, useEffect } from "react"
import Project from "./Project"
import Title from "./Title"

const Projects = ({ projects, title }) => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [filters, setFilters] = useState({ category: "all" })

  const getCategories = items => {
    let tempItems = items.map(item => {
      return item.category
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
      let items = tempItems.filter(item => item.category === value)
      setItems(items)
    }
    setFilters(value)
  }
  return (
    <>
      <Title title={title} />
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
    </>
  )
}

export default Projects
