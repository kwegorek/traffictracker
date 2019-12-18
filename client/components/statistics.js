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

class Statistics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x_axis: this.props.samples.timepoint,
      y_axis_start: this.props.samples.travelTimeSeconds
    }
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
    const currUserId = this.props.user.id
    const {match: {params}} = this.props
    const routeId = params.id
    this.props.displayTrafficSamples(routeId)
  }

  render() {
    const {lastDrawLocation} = this.state

    return this.props.samples ? (
      <React.Fragment>
        <div>
          <div>
            <XYPlot
              animation
              xDomain={
                lastDrawLocation && [
                  lastDrawLocation.left,
                  lastDrawLocation.right
                ]
              }
              yDomain={
                lastDrawLocation && [
                  lastDrawLocation.bottom,
                  lastDrawLocation.top
                ]
              }
              width={1000}
              height={500}
            >
              <HorizontalGridLines />

              <YAxis title="time in sec" />
              <XAxis title="timepoint" tickLabelAngle={-90} />

              <LineSeries key="sssss" data={this.props.samples} />

              <Highlight
                onBrushEnd={area => this.setState({lastDrawLocation: area})}
                onDrag={area => {
                  this.setState({
                    lastDrawLocation: {
                      bottom:
                        lastDrawLocation.bottom + (area.top - area.bottom),
                      left: lastDrawLocation.left - (area.right - area.left),
                      right: lastDrawLocation.right - (area.right - area.left),
                      top: lastDrawLocation.top + (area.top - area.bottom)
                    }
                  })
                }}
              />
            </XYPlot>
          </div>

          <button
            className="showcase-button"
            onClick={() => this.setState({lastDrawLocation: null})}
          >
            Reset Zoom
          </button>

          <div>
            <h4>
              <b>Last Draw Area</b>
            </h4>
            {lastDrawLocation ? (
              <ul style={{listStyle: 'none'}}>
                <li>
                  <b>Top:</b> {lastDrawLocation.top}
                </li>
                <li>
                  <b>Right:</b> {lastDrawLocation.right}
                </li>
                <li>
                  <b>Bottom:</b> {lastDrawLocation.bottom}
                </li>
                <li>
                  <b>Left:</b> {lastDrawLocation.left}
                </li>
              </ul>
            ) : (
              <span>N/A</span>
            )}
          </div>
        </div>
      </React.Fragment>
    ) : null
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
  connect(mapStateToProps, mapDispatchToProps)(Statistics)
)
