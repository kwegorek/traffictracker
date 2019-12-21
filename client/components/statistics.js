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
  DecorativeAxis,
  ChartLabel,
  Line
} from 'react-vis'
import MyLabel from './mylabel'
import {withRouter, Route, Switch} from 'react-router-dom'
import {displayTrafficSamples} from '../store/trafficsample'

class Statistics extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDrawLocation: null,
      showAverageCommuteTime: null,
      timepoint: this.props.samples.timepoint
    }
    this.myFormatter = this.myFormatter.bind(this)
    this.myFormatterY = this.myFormatterY.bind(this)
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
    const currUserId = this.props.user.id
    const {match: {params}} = this.props
    const routeId = params.id
    this.props.displayTrafficSamples(routeId)
  }

  // myFormatter(t,i) {
  //   return (<tspan>
  //     <tspan x="0" dy="1em">MY VALUE</tspan>
  //     <tspan x="0" dy="1em">{t}</tspan>
  //   </tspan>);
  // }

  myFormatter(v) {
    // console.log('v', v)
    return this.props.samples[Math.round(v)].timepoint
  }

  myFormatterY(sec) {
    // console.log('v', v)
    return sec
  }

  render() {
    const {lastDrawLocation} = this.state

    return this.props.samples ? (
      <React.Fragment>
        <div>
          <div>
            {this.state.showAverageCommuteTime ? (
              <XYPlot width={300} height={300}>
                <HorizontalGridLines />
                <LineSeries
                  data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
                />
                <XAxis />
                <YAxis />
              </XYPlot>
            ) : (
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

                <YAxis
                  title="time in sec"
                  tickFormat={sec => this.myFormatterY(sec)}
                />
                <XAxis
                  title="timepoint"
                  top={40}
                  tickFormat={v => this.myFormatter(v)}
                  tickLabelAngle={-90}
                />
                {/*              
              <XAxis title="X Axis" style={{
            line: {stroke: '#ADDDE1'},
            ticks: {stroke: '#ADDDE1'},
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
          // }}/> */}
                {/* // <XAxis top={40} tickFormat={this.myFormatter} /> */}

                {/* <XAxis
                  top={410}
                  tickLabelAngle={-90}
                  style={{
                    line: {stroke: '#ADDDE1'},
                    ticks: {stroke: '#ADDDE1'},
                    text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                  }}
                  tickFormat={v => `time am/pm ${v + 1}`}
                  tickValues={[0, 5, 10, 15, 20]}
                  title="X"
                /> */}

                <LineSeries key="sssss" data={this.props.samples} />

                <Highlight
                  onBrushEnd={area => this.setState({lastDrawLocation: area})}
                  onDrag={area => {
                    this.setState({
                      lastDrawLocation: {
                        bottom:
                          lastDrawLocation.bottom + (area.top - area.bottom),
                        left: lastDrawLocation.left - (area.right - area.left),
                        right:
                          lastDrawLocation.right - (area.right - area.left),
                        top: lastDrawLocation.top + (area.top - area.bottom)
                      }
                    })
                  }}
                />
              </XYPlot>
            )}
          </div>

          <button
            className="showcase-button"
            onClick={() => this.setState({lastDrawLocation: null})}
          >
            Reset Zoom
          </button>

          <button
            className="showcase-button"
            onClick={() => this.setState({showAverageCommuteTime: false})}
          >
            Show All Data
          </button>
          <button
            className="showcase-button"
            onClick={() => this.setState({showAverageCommuteTime: true})}
          >
            Show Average Commute Time
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
      y: item.travelTimeSeconds,
      timepoint: item.timepoint
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
