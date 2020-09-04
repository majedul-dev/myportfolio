const path = require("path")

// create pages dynamically
exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }

      allContentfulBlogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulProjects.edges.forEach(project => {
    actions.createPage({
      path: `/projects/${project.node.slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: {
        slug: project.node.slug,
      },
    })
  })

  result.data.allContentfulBlogs.edges.forEach(blog => {
    actions.createPage({
      path: `/blogs/${blog.node.slug}`,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        slug: blog.node.slug,
      },
    })
  })
}
