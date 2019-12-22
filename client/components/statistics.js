/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  DiscreteColorLegend,
  Highlight,
  LineSeries,
  DecorativeAxis,
  ChartLabel,
  VerticalBarSeries,
  Line
} from 'react-vis'
import MyLabel from './mylabel'
import {withRouter, Route, Switch} from 'react-router-dom'
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
    this.showWeek = this.showWeek.bind(this)
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
    // var date = new Date(str);
    //     var day = date.getDate(); //Date of the month: 2 in our example
    // var month = date.getMonth(); //Month of the Year: 0-based index, so 1 in our example
    // var year = date.getFullYear() //Year: 2013

    return this.props.samples[Math.round(v)].timepoint
  }

  showWeek() {
    const allSampleslen = this.props.data
    // const dateNow =
  }

  myFormatterY(sec) {
    console.log('sec', sec)

    return Math.round(Number(sec) / 60) + ' min'
  }

  render() {
    const {lastDrawLocation} = this.state

    return this.props.samples ? (
      <React.Fragment>
        <div>
          <div>
            {this.state.showAverageCommuteTime ? (
              <div id="plot-container" className="rec">
                <h1 className="graph">Average Commute Time by Day</h1>
                <XYPlot
                  width={1000}
                  height={500}
                  margin={{left: 50, bottom: 160}}
                >
                  <VerticalBarSeries data={this.props.samples} />
                  <YAxis
                    title="time in min"
                    tickFormat={sec => this.myFormatterY(sec)}
                  />
                  <XAxis
                    title="timepoint"
                    down={20}
                    tickFormat={v => this.myFormatter(v)}
                    tickLabelAngle={-90}
                  />
                </XYPlot>{' '}
              </div>
            ) : (
              <div id="plot-container" className="rec">
                <h1 className="graph">Commute Time by day and time</h1>
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

                  <YAxis
                    title="time in min"
                    tickFormat={sec => this.myFormatterY(sec)}
                  />
                  <XAxis
                    title="timepoint"
                    down={20}
                    tickFormat={v => this.myFormatter(v)}
                    tickLabelAngle={-90}
                  />

                  <LineSeries key="sssss" data={this.props.samples} />

                  <Highlight
                    onBrushEnd={area => this.setState({lastDrawLocation: area})}
                    onDrag={area => {
                      this.setState({
                        lastDrawLocation: {
                          bottom:
                            lastDrawLocation.bottom + (area.top - area.bottom),
                          left:
                            lastDrawLocation.left - (area.right - area.left),
                          right:
                            lastDrawLocation.right - (area.right - area.left),
                          top: lastDrawLocation.top + (area.top - area.bottom)
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
            onClick={() => this.setState({showAverageCommuteTime: false})}
          >
            Show All Data
          </button>
          <button
            className="showcase-button showcase-button-container"
            onClick={() => this.setState({showAverageCommuteTime: true})}
          >
            Show Average Commute Time
          </button>

          {this.state.showAverageCommuteTime ? null : (
            <React.Fragment>
              <button
                className="showcase-button-show-week-day showcase-button-container"
                onClick={() => this.setState({showAverageCommuteTime: false})}
              >
                Show 7 days
              </button>
              <button
                className="showcase-button-show-week-day showcase-button-container"
                onClick={() => this.setState({showAverageCommuteTime: false})}
              >
                Show 1 day
              </button>{' '}
            </React.Fragment>
          )}

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
    data: state.trafficsample.trafficsamples
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
