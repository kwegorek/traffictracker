import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Tutorial from '../components/tutorial'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <Tutorial />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
