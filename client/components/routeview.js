import React from 'react'
import {connect} from 'react-redux'
import {deleteRouteThunk} from '../store/routes'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const RouteView = ({route}) => {
  return (
    <div className="route-card">
      <h3>Route</h3>
      <h3>Route start: {route.start}</h3>
      <h3>Route end: {route.end}</h3>
      <Link to={`/allroutes/${route.id}`}>go to single view....</Link>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    displayOneRoute: id => dispatch(displayOneRoute(id)),
    deleteRouteThunk: id => dispatch(deleteRouteThunk(id))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(RouteView))
