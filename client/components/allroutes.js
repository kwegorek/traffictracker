import React from 'react'
import {connect} from 'react-redux'
import {displayRoutes, getRoutes, addRouteThunk} from '../store/route'
import Traffic from '../components/traffic'
import SingleRoute from './singleroute'
import MapBox from './mapbox'
import store from '../routes'

class AllRoutes extends React.Component {
  constructor() {
    super()

    this.state = {
      start: '',
      end: '',
      routes: [
        {
          id: 1,
          start: [-74.007624, 40.705137],
          end: [-74.007108, 40.707894],
          userId: 1
        },
        {
          id: 2,
          start: [-73.999542, 40.715317],
          end: [-74.007108, 40.707894],
          userId: 1
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    console.log('mounting')

    await this.props.displayRoutes()

    console.log(this.props, 'props')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit(evt) {
    evt.preventDefault()

    let location = {
      start: evt.target.start.value,
      end: evt.target.end.value
    }

    console.log(location, 'location  - - - - - - >')

    addRouteThunk(location)
  }

  render() {
    const routes = this.state.routes

    return (
      <React.Fragment>
        <div>
          <h1>Map</h1>
          <MapBox />
        </div>

        <div id="allroutes-wrapper">
          <div className="col1">
            <h2>Add route:</h2>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="place">Name of start point:</label>
              <input
                name="start"
                onChange={this.handleChange}
                value={this.state.start}
              />
              <label htmlFor="place">Name of end point:</label>
              <input
                name="end"
                value={this.state.end}
                onChange={this.handleChange}
              />
              <button type="submit">Add route</button>
            </form>
            <h1>All routes:</h1>
            <div>
              {this.state.routes
                ? this.state.routes.map((route, indx) => {
                    return <SingleRoute key={indx} route={route} />
                  })
                : null}{' '}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayRoutes: () => dispatch(displayRoutes()),
    addRouteThunk: added => dispatch(addRouteThunk(added))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
