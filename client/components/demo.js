/* eslint-disable complexity */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  DiscreteColorLegend,
  Highlight,
  LineSeries,
  Borders,
  VerticalBarSeries
} from 'react-vis'

import {withRouter} from 'react-router-dom'
import {displayTrafficSamples} from '../store/trafficsample'

const ITEMS = [
  {
    title:
      'Traffic pattern at given point of the day. Each sample gatherd every 15 minutes.',
    color: '#6742ca7a',
    stroke: '#fff',
    strokeWidth: 3
  }
]

const getDate = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy

  return today
}

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDrawLocation: null,
      showAverageCommuteTime: null,
      timepoint: this.props.samples.timepoint,
      showWeek: false,
      showAll: true,
      weekData: null
    }
    this.myFormatter = this.myFormatter.bind(this)
    this.myFormatterY = this.myFormatterY.bind(this)
  }

  componentDidMount() {
    // for now hardcoding userId and routeId, todo pass by props
    const currUserId = 1
    const {match: {params}} = this.props
    const routeId = 1
    this.props.displayTrafficSamples(routeId)
  }

  myFormatter(v) {
    return (
      new Date(this.props.samples[Math.round(v)].timepoint)
        .toISOString()
        .substring(5, 10) +
      ' hr.' +
      new Date(this.props.samples[Math.round(v)].timepoint)
        .toISOString()
        .substring(11, 16)
    )
  }

  myFormatterY(sec) {
    if (sec < 0) {
      sec = 0
    }

    return Math.round(Number(sec) / 60) + ' min'
  }

  render() {
    const {lastDrawLocation} = this.state

    return this.props.samples ? (
      <React.Fragment>
        <div>
          <div>
            {this.state.showAverageCommuteTime ? (
              <div id="plot-container" className="rec ">
                <h1 className="graph">Max Commute from Philadelphia to NYC</h1>
                <XYPlot
                  xType="ordinal"
                  width={1000}
                  height={500}
                  stackBy="y"
                  margin={{left: 50, bottom: 160}}
                >
                  <VerticalBarSeries data={this.props.maxTime} />

                  <YAxis
                    title="time in min"
                    tickFormat={sec => this.myFormatterY(sec)}
                  />

                  <XAxis
                    title="timepoint"
                    down={20}
                    tickLabelAngle={-90}
                    style={{
                      line: {stroke: '#ADDDE1'},
                      ticks: {stroke: '#ADDDE1'},
                      text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    }}
                  />
                </XYPlot>{' '}
              </div>
            ) : (
              <div id="plot-container" className="rec">
                <h1 className="graph">Commute Time from Philadelphia to NYC</h1>
                <XYPlot
                  margin={{left: 50, bottom: 160}}
                  labelsStyle={{fontSize: 16, fill: '#222'}}
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
                  <Borders
                    style={{
                      bottom: {fill: '#fff'},
                      left: {fill: '#fff'},
                      right: {fill: '#fff'},
                      top: {fill: '#fff'}
                    }}
                  />

                  <YAxis
                    title="time in min"
                    tickFormat={sec => this.myFormatterY(sec)}
                  />
                  <XAxis
                    title="timepoint"
                    down={20}
                    tickFormat={v => this.myFormatter(v)}
                    tickLabelAngle={-90}
                    style={{
                      line: {stroke: '#ADDDE1'},
                      ticks: {stroke: '#ADDDE1'},
                      text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                    }}
                  />

                  {this.state.showAll ? (
                    <LineSeries key="showall" data={this.props.samples} />
                  ) : null}

                  {this.state.showWeek ? (
                    <LineSeries key="showweek" data={this.props.weeksamples} />
                  ) : null}

                  <Highlight
                    onBrushEnd={area => this.setState({lastDrawLocation: area})}
                    onDrag={area => {
                      this.setState({
                        lastDrawLocation: {
                          bottom: 0,
                          left:
                            lastDrawLocation.left - (area.right - area.left),
                          right:
                            lastDrawLocation.right - (area.right - area.left),
                          top: 0
                        }
                      })
                    }}
                  />

                  <DiscreteColorLegend
                    margin={{left: 100}}
                    down={10}
                    items={ITEMS}
                    width={240}
                  />
                </XYPlot>
              </div>
            )}
          </div>

          <button
            className="showcase-button showcase-button-container"
            onClick={() => this.setState({lastDrawLocation: null})}
          >
            Reset Zoom
          </button>

          <button
            className="showcase-button showcase-button-container"
            onClick={() =>
              this.setState({
                showAverageCommuteTime: false,
                showAll: true,
                showWeek: false
              })
            }
          >
            Show All Data
          </button>
          <button
            className="showcase-button showcase-button-container"
            onClick={() => this.setState({showAverageCommuteTime: true})}
          >
            Show Max Time in Traffic
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
    })),

    weeksamples: state.trafficsample.weeklytrafficsamples,
    data: state.trafficsample.trafficsamples,
    maxTime: state.trafficsample.maxTime
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayTrafficSamples: routeId => dispatch(displayTrafficSamples(routeId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Demo))
