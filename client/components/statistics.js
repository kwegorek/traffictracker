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
import {displayTrafficSamples} from '../store/trafficsample'

class Statistics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDrawLocation: null
    }
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
    const userId = 111
    const routeId = 1

    this.props.displayTrafficSamples(userId, routeId)
  }

  render() {
    const {lastDrawLocation} = this.state

    return (
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

              <YAxis />
              <XAxis tickLabelAngle={-90} />

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
