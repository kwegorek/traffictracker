import React from 'react'
import {connect} from 'react-redux'
import Statistics from '../components/statistics'
import {deleteRouteThunk, displayOneRoute} from '../store/routes'
import {withRouter, Redirect} from 'react-router-dom'

class SingleRoute extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.handleDelete = this.handleDelete.bind(this)
  }

  async componentDidMount() {
    const {match: {params}} = this.props
    const {id} = this.props.match.params
    this.props.displayOneRoute(id)
  }

  handleDelete() {
    const {id} = this.props.match.params
    this.props.deleteRouteThunk(id)
  }

  render() {
    const route = this.props.route

    return (
      <div id="singleRoute">
        {route ? (
          <div
            style={{marginTop: '40px', textAlign: 'center'}}
            className="description-container"
          >
            <form className="route-card">
              <h3 style={{marginTop: '40px', textAlign: 'center'}}>
                Your current location:
              </h3>
              <div>
                <h2>
                  <p>
                    <b>From:</b>
                  </p>
                  {route.start}
                </h2>
              </div>
              <div>
                <h2>
                  <p>
                    <b>To:</b>
                  </p>
                  {route.end}
                </h2>
              </div>
              <button type="submit" onClick={this.handleDelete}>
                Remove
              </button>
            </form>

            <Statistics route={route} />
          </div>
        ) : (
          <Redirect to="/allroutes" />
        )}
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
