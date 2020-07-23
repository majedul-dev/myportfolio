import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  // FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://web.facebook.com/majedul956/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/majedul-islam-5240981a0/",
  },
  {
    id: 3,
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://dribbble.com/majedul_dev",
  },
  // {
  //   id: 4,
  //   icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
  //   url: "https://www.twitter.com",
  // },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/mazedul_dev",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="blank" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
