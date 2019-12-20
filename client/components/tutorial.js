/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  Highlight,
  LineSeries,
  MarkSeries
} from 'react-vis'
import {withRouter, Route, Switch} from 'react-router-dom'
import {displayTrafficSamples} from '../store/trafficsample'
import GoogleMap from '../components/map'

class Tutorial extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
  }

  render() {
    return (
      <div>
        <div>
          <h1> How traffic tracker works? </h1>
          <p>
            {' '}
            Traffic Tracker shows real time data traffic. It uses Google API to
            get the most recentt changes in traffic and time needed to get to
            the end point.
          </p>
        </div>
        <div>
          <h2>Adding route</h2>
          <p>
            {' '}
            A logged in user can add route that will be tracked each day.
            Tracking of user's route start on the following day at 12 p.m. and
            continues until the user removes the route or stops tracking.
          </p>
          <h2>Summary on Email</h2>
          <p>
            {' '}
            User gets statistics data on email. Summary answers those questions:
            how much time on average you spend commuting between points? what is
            the best commute window?
          </p>
        </div>
        <GoogleMap />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    // samples: state.trafficsample.trafficsamples
    //   .map(item => ({x: new Date(item.timepoint), y: item.travelTimeSeconds}))
    //   .sort((a, b) => (a.x > b.x ? 1 : -1))
    samples: state.trafficsample.trafficsamples.map((item, indx) => ({
      x: indx,
      y: item.travelTimeSeconds
    }))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayTrafficSamples: routeId => dispatch(displayTrafficSamples(routeId))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Tutorial)
)
