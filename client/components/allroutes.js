/* eslint-disable react/void-dom-elements-no-children */
import React from 'react'
import { connect } from 'react-redux'

import RouteView from '../components/routeview'
import { addRouteThunk, displayRoutes } from '../store/routes'
import { me } from '../store/user'

class AllRoutes extends React.Component {
  constructor() {
    super()
    this.state = {
      start: '',
      end: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.displayRoutes()
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    let location = {
      start: this.state.start,
      end: this.state.end,
      userId: this.props.user.id
    }
    this.props.addRouteThunk(location)

    this.setState({
      start: '',
      end: ''
    })
  }

  render() {
    let propsUserId = this.props.user.id
    let routes = this.props.routes
    //console.log(routes, 'routes')
    let filteredRoutes = routes.filter(route => route.userId === propsUserId)

    return (
      <div className="single-add-container">
        <div className="allroutes-wrapper-col1">
          {filteredRoutes.length > 0 && this.props.user.firstName.length > 0 ? (
            <h3 style={{marginTop: '40px', textAlign: 'center'}}>
              Tracked locations:
            </h3>
          ) : null}
          {this.props.routes.length > 0
            ? filteredRoutes.map((route, indx) => {
                return <RouteView key={indx} route={route} />
              })
            : null}
        </div>

        <div className="allroutes-wrapper-col2">
          <h2>Submit your route for tracking:</h2>
          <form>
            <input
              type="text"
              name="start"
              placeholder="trip starts here eg. 5 Hanover Square, New York, NY 10004"
              value={this.state.start}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="end"
              value={this.state.end}
              placeholder="trip ends here eg. 333 S Broad St, Philadelphia, PA 19107"
              onChange={this.handleChange}
            />
            <button onClick={evt => this.handleSubmit(evt)} type="submit">
              {' '}
              Submit{' '}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayRoutes: () => dispatch(displayRoutes()),
    addRouteThunk: added => dispatch(addRouteThunk(added)),
    getUser: () => dispatch(me())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
