import React from 'react'
import {connect} from 'react-redux'
import Statistics from '../components/statistics'
import {deleteRouteThunk, displayOneRoute} from '../store/routes'
import {withRouter} from 'react-router-dom'

class SingleRoute extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const {match: {params}} = this.props
    const {id} = this.props.match.params
    this.props.displayOneRoute(id)
  }

  render() {
    const route = this.props.route

    return (
      <div id="singleRoute">
        <div className="description-container">
          {route ? (
            <div>
              <h3>Name of route:</h3>
              <div>Name of start point: {route.start}</div>
              <div>Name of endpoint: {route.end}</div>
            </div>
          ) : null}
        </div>
        {route ? (
          <div>
            <button
              type="submit"
              onClick={() => this.props.deleteRouteThunk(id)}
            >
              Remove
            </button>
          </div>
        ) : null}
        <div>
          <Statistics route={this.props.route} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    route: state.routes.route
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRouteThunk: id => dispatch(deleteRouteThunk(id)),
    addRouteAsLoggedIn: (userId, data) => dispatch(registerUser(userId, data)),
    displayOneRoute: id => dispatch(displayOneRoute(id))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleRoute)
)
