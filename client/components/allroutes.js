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
      end: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('mounting')

    this.props.displayRoutes()

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
    addRouteThunk(location)
  }

  render() {
    return (
      <React.Fragment>
        {/* <div>
          <h1>Map</h1>
          <MapBox />
        </div> */}

        <div id="allroutes-wrapper">
          <div className="allroutes-wrapper-row-1">
            <div className="allroutes-wrapper-col1">
              <h2>Add route</h2>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="place">Name of start point:</label>
                <input
                  name="start"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.start}
                />
                <label htmlFor="place">Name of end point:</label>
                <input
                  name="end"
                  type="text"
                  value={this.state.end}
                  onChange={this.handleChange}
                />
                <button type="submit">Add route</button>
              </form>
            </div>
            <div className="allroutes-wrapper-col2">
              <h1>Tracked routes</h1>
              <div>
                {this.props.routes
                  ? this.props.routes.map((route, indx) => {
                      return <SingleRoute key={indx} route={route} />
                    })
                  : null}{' '}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    routes: state.route.routes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayRoutes: () => dispatch(displayRoutes()),
    addRouteThunk: added => dispatch(addRouteThunk(added))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
