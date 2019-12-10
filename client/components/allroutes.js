/* eslint-disable react/void-dom-elements-no-children */
import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes, addRouteThunk} from '../store/routes'
import RouteView from '../components/routeview'

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
      start: evt.target.start.value,
      end: evt.target.end.value
    }
    this.props.addRouteThunk(location)
  }

  render() {
    return (
      <div>
        <div className="allroutes-wrapper-col1">
          <h1> Tracked routes </h1>
          {this.props.routes
            ? this.props.routes.map((route, indx) => {
                return <RouteView key={indx} route={route} />
              })
            : null}
        </div>

        <div className="allroutes-wrapper-col2">
          <h2> Add own route </h2>
          <form onClick={evt => this.handlSubmit(evt)}>
            <input
              type="text"
              name="start"
              value={this.state.start}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="end"
              value={this.state.end}
              onChange={this.handleChange}
            />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes.routes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayRoutes: () => dispatch(displayRoutes()),
    addRouteThunk: added => dispatch(addRouteThunk(added))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
