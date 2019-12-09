import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'

/**
 * COMPONENT
 */
export class UserHome extends Component {
  componentDidMount() {
    console.log('component userhome mounting')
  }

  render() {
    return (
      <div className="home-container">
        <h3>Welcome!</h3>
        <p>
          TrafficTracker allows user to track traffic patterns long ter.
          Application is using real-time data to update traffic data.
        </p>
        <p>
          By using TraficTracker, the user will be able to find the commute
          window and effectively plandaily commute.
        </p>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapStateToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
