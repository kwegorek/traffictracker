import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>Traffic Tracker</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link className="nav" to="/home">
            Home
          </Link>
          <a className="logout-container" href="#" onClick={handleClick}>
            Logout
          </a>
          <Link className="nav" to="/allroutes">
            All user routes
          </Link>
          <Link className="nav" to="/statistics">
            Statistics
          </Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link className="nav" to="/home">
            Home{' '}
          </Link>
          <Link className="nav" to="/login">
            Login
          </Link>
          <Link className="nav" to="/signup">
            Sign Up
          </Link>
          <Link className="nav" to="/allroutes">
            All routes
          </Link>
          <Link className="nav" to="/statistics">
            Statistics
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
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
