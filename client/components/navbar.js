import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, email}) => {
  return (
    <div>
      <nav className="w3-bar w3-black navbar-container">
        {isLoggedIn ? (
          <div>
            <a className=" w3-bar-item navbaritem-welcome navitem" href="#">
              {`Welcome, ${email}`}
            </a>

            <a
              className="w3-button w3-bar-item navbaritem-right responsive-logout-icon"
              href="#"
              onClick={handleClick}
            >
              <img style={{width: '40px'}} src="./img/logout_icon.png" />
            </a>

            <Link
              className="w3-button w3-bar-item navbaritem-right navitem"
              to="/allroutes"
            >
              My routes
            </Link>
            <Link
              className="w3-button w3-bar-item navbaritem-right navitem"
              to="/home"
            >
              Get started
            </Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link
              className="w3-button w3-bar-item navbaritem-right navitem"
              to="/tutorial"
            >
              Get started
            </Link>
            <Link
              className="w3-button w3-bar-item navbaritem-right navitem"
              to="/login"
            >
              Login
            </Link>
            <Link
              className="w3-button w3-bar-item navbaritem-right navitem"
              to="/signup"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    email: state.user.email,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
