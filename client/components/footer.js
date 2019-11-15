import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <div className="footer-wrap">
      <hr />
      <div>
        <ul id="footer-menu" className="footer-menu">
          <li className="menu-item items-footer">
            {' '}
            <Link className="contact-us" to="#">
              CONTACT
            </Link>
          </li>
          <li className="menu-item items-footer">
            {' '}
            <Link className="privacy-policy" to="#">
              PRIVACY POLICY
            </Link>
          </li>
          <li className="menu-item items-footer">
            {' '}
            <Link className="terms of use" to="#">
              TERMS OF USE
            </Link>
          </li>
          <li className="menu-item items-footer">
            {' '}
            <Link className="community rules" to="#">
              COMMUNITY RULES
            </Link>
          </li>

          <li>
            <Link className="contact-us fa fa-facebook" to="#" />
          </li>
          <li>
            <Link className="contact-us fa fa-twitter" to="#" />
          </li>
          <li>
            <Link className="contact-us fa fa-instagram" to="#" />
          </li>
          <li>
            <Link className="contact-us fa fa-pinterest" to="#" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
