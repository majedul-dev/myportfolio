import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Title from "../components/Title"
import Image from "gatsby-image"
const About = ({
  data: {
    allContentfulAboutMePage: { nodes: about },
  },
}) => {
  const { title, stacks, bio, image } = about[0]
  console.log(stacks)

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            {documentToReactComponents(bio.json)}
            <h4 className="text-primary">My Skills</h4>
            <div className="about-stack">
              {stacks.map(item => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulAboutMePage {
      nodes {
        title
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        bio {
          bio
          json
        }
        stacks {
          id
          name
        }
      }
    }
  }
`

export default About
