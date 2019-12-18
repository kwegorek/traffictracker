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
          <h1> Why traffic tracker ? </h1>
          <p> Traffic Tracker shows real time data traffic. </p>
        </div>
        <div>
          <h1> Functonalities </h1> <h2> Adding single route </h2>
          <p> A logged in user can track up to 3 routes. </p>
          <h2>
            Get email with traffic windows summary and aadjust your decisions to
            your commute time
          </h2>
          <p> User gets statistics data update on email </p>
        </div>
        <div>
          <h4>Summary</h4>
          <p>
            Appplication allows to see day by day traffic and observe the
            changes in traffic for a long time
          </p>
        </div>
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
