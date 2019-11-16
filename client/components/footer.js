import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <ul id="footer-menu" className="footer-menu">
      <li className="menu-item items-footer">
        <Link className="contact-us" to="#">
          CONTACT
        </Link>
      </li>
      <li className="menu-item items-footer">
        <Link className="privacy-policy" to="#">
          PRIVACY POLICY
        </Link>
      </li>
      <li className="menu-item items-footer">
        <Link className="terms of use" to="#">
          TERMS OF USE
        </Link>
      </li>
      <li className="menu-item items-footer">
        <Link className="community rules" to="#">
          COMMUNITY RULES
        </Link>
      </li>
    </ul>
  </footer>
)

export default Footer
