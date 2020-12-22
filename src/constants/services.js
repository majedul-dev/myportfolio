import React from "react"
import { FaCode, FaSketch } from "react-icons/fa"
import { AiOutlineAntDesign } from "react-icons/ai"
export default [
  {
    id: 3,
    icon: <AiOutlineAntDesign className="service-icon" />,
    title: "UI/UX design",
    text: `I will scatch for a web application by following the core fundamentals of UI/UX design. The tools that I'm going to use for prototyping that is Figma or Adobe XD`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Front-end design is required before jump into the back-end development so I will do responsive and modern design for any website`,
  },
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `I am a JavaScript developer and I'm comfortable with Node.js. I will use MongoDB or Firebase for the database. Afterall once it is ready for deployment then I'll make it end with deployment`,
  },
]
