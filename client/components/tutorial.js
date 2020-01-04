/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {displayTrafficSamples} from '../store/trafficsample'
import GoogleMap from '../components/map'
import Demo from '../components/demo'

class Tutorial extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1> How Traffic Tracker works? </h1>
          <h2>
            Make decisions on long-term gathered data about the traffic and see
            the real commute pattern. By using Traffic Tracker you can
            conveniently and efficiently factor commute time into decisions like
            home-buying or changing job.
          </h2>
          <p className="description">
            Traffic Tracker gathers real-time traffic data for the added route.
            It uses Google API to get the most recent changes in the traffic and
            commute time. By tracking traffic over long period of time (e.g. 3
            months), you can see traffic patterns on the added route. Data
            analysis helps you to decrease the time spent in the traffic and
            find the convenient commute window. It may help you decide whether
            to buy a house and commute or rely on city public transport.
          </p>
          <GoogleMap />
        </div>
        <div>
          {/* example for demo purposes Demo component no-login needed*/}
          <Demo />
          <h2>Adding route</h2>
          <p className="description add-route-desc">
            A logged in user can add route that will be tracked each day until
            the route will be removed from the account. Tracking of user's route
            starts immediately and real-time commute time sample is gathered
            every 15 minutes. Each gathered sample is visible on the graph. One
            graph shows all gathers samples, another one shows maximum commute
            time for each day.
          </p>
          <div id="map">
            <img
              src="img/add_route_demo.png"
              alt="add route view"
              height="300"
              width="400"
            />
          </div>

          <h2>Summary on Email</h2>
          <p className="description">
            User can subscribe and get a summary of the gathered data.
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
