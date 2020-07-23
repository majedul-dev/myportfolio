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
}
