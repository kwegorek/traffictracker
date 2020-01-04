import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn, email}) => {
  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link className="nav" to="/home">
              Get started
            </Link>
            <Link className="nav" to="/allroutes">
              All user routes
            </Link>
            <a className=" nav" href="#" onClick={handleClick}>
              Logout
            </a>

            <a className="name-nav nav" href="#">
              {`Welcome, ${email}`}
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}

            <Link className="nav" to="/tutorial">
              Get started
            </Link>
            <Link className="nav" to="/login">
              Login
            </Link>
            <Link className="nav" to="/signup">
              Sign Up
            </Link>
          </div>
        )}
      </nav>
      <hr />
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
