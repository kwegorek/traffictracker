import React from 'react'
import {connect} from 'react-redux'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis'
import {displayTrafficSamples} from '../store/trafficsample'

class Statistics extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
    const userId = 111
    const routeId = 1
    this.props.displayTrafficSamples(userId, routeId)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Statistics:</h1>
          <div>
            {this.props.samples ? (
              <XYPlot xType="time" width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries data={this.props.samples} />
                <XAxis tickLabelAngle={-90} />
                <YAxis />
              </XYPlot>
            ) : null}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    samples: state.trafficsample.trafficsamples
      .map(item => ({x: new Date(item.timepoint), y: item.travelTimeSeconds}))
      .sort((a, b) => (a.x > b.x ? 1 : -1))
    // samples : state.trafficsample.trafficsamples.map( item => ( { x : item.timepoint, y : item.travelTimeSeconds}))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayTrafficSamples: (userId, routeId) =>
      dispatch(displayTrafficSamples(userId, routeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
