import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>
          &copy;{new Date().getFullYear()} majedul islam. <span>MZDIV</span> all
          rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
