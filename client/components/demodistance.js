/* eslint-disable react/button-has-type */
import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {getOneTimePoint} from '../store/demo'
const axios = require('axios')

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  DiscreteColorLegend,
  Highlight,
  makeWidthFlexible,
  LineMarkSeries,
} from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot)

const ITEMS = [
  {
    title:
      'Traffic pattern at given point of the day. Each sample gathered every 15 minutes.',
    color: '#6742ca7a',
    stroke: '#fff',
    strokeWidth: 3
  }
]

class DemoDistance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastDrawLocation: null,
      showAverageCommuteTime: null,

      start: 'ChIJ4zGFAZpYwokRGUGph3Mf37k',
      end: 'ChIJpVER8hFT5okR5XBhBVttmq4',
      traffic: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.myFormatter = this.myFormatter.bind(this)
    this.myFormatterY = this.myFormatterY.bind(this)
  }

  componentDidMount() {}

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  handleSubmit(evt) {
    evt.preventDefault()
    // fetchTravelTime()

    this.props.getOneTimePoint()
  }

  myFormatter(v) {
    return v
  }

  myFormatterY(sec) {
    if (sec < 0) {
      sec = 0
    }

    return Math.round(Number(sec) / 60)
  }

  render() {
    let dataPlot
    let maxTime
    let minTime
    let yPlotMax

    // 2021-08-17T16:33:35.822Z

    if (this.props.timepoints && this.props.timepoints.length > 0) {
      dataPlot = this.props.timepoints.map((item, indx) => ({
        x: new Date(item.date),
        y: this.myFormatterY(item.timeSecValue)
      }))

      let times = []

      let timesArr = this.props.timepoints.map((el, indx) => {
        times.push(this.myFormatterY(el.timeSecValue))
      })

      if (timesArr.length > 0) {
        maxTime = Math.max(...times)
        yPlotMax = 10 + Math.max(...times)
        minTime = Math.min(...times)
      }
    }

    return (
      <div>
        <div className="live-demo-container">
          <h1>Try live demo</h1>
          <h3 className="live-demo-description-container">
            Click submit to display traffic data for a demo location.
          </h3>
        </div>

        <form
          className="form-container live-demo-form"
          onChange={this.handleChange}
          onClick={this.handleSubmit}
        >
          <div>
            <label htmlFor="start">
              <small>From: Central Park</small>
            </label>
            <input
              name="start"
              type="text"
              value="ChIJ4zGFAZpYwokRGUGph3Mf37k"
            />
          </div>
          <div>
            <label htmlFor="start">
              <small>To: Connecticut</small>
            </label>
            <input
              name="start"
              type="text"
              value="ChIJpVER8hFT5okR5XBhBVttmq4
"
            />
          </div>
          <div id="live-demo-btn">
            <button type="submit">Submit</button>
          </div>
        </form>

        {dataPlot && dataPlot.length > 0 ? (
          <div
            style={{position: 'relative'}}
            className="rec travel-graph-container"
          >
            <h1 className="graph">Duration in traffic</h1>
            <FlexibleXYPlot
              animation
              xType="time"
              yDomain={[0, yPlotMax]}
              className="graph-container"
              margin={{left: 50, bottom: 160}}
              width={600}
              height={550}
              labelsStyle={{fontSize: 16, fill: '#222'}}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis
                totalTicks={dataPlot.length}
                title="day and time of sample"
                down={20}
                tickFormat={function tickFormat(d) {
                  const date = new Date(d)
                  const showTime = date.toISOString().substr(11, 5)
                  const showDay = date.toISOString().substr(5, 5)

                  return `${showDay} at ${showTime}`
                }}
                tickLabelAngle={-45}
                style={{
                  line: {stroke: '#ADDDE1'},
                  ticks: {stroke: '#ADDDE1'},
                  text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                }}
              />
              <YAxis title="duration in minutes" tickLabelAngle={-90} />
              <LineMarkSeries
                className="linemark-series-example"
                style={{
                  strokeWidth: '3px'
                }}
                lineStyle={{stroke: 'red'}}
                markStyle={{stroke: 'blue'}}
                data={dataPlot}
              />
              <LineMarkSeries
                className="linemark-series-example-2"
                curve="curveMonotoneX"
                data={dataPlot}
              />
              <DiscreteColorLegend items={ITEMS} />

              <Highlight
                onBrushEnd={area => this.setState({lastDrawLocation: area})}
                onDrag={area => {
                  this.setState({
                    lastDrawLocation: {
                      bottom: 0,
                      left: lastDrawLocation.left - (area.right - area.left),
                      right: lastDrawLocation.right - (area.right - area.left),
                      top: 0
                    }
                  })
                }}
              />
            </FlexibleXYPlot>

            <div className="summary-container">
              <h3 style={{marginTop: '60px'}}>SUMMARY</h3>

              <h4>Max time in traffic: {maxTime} minutes</h4>
              <h4 tyle={{marginBottom: '60px'}}>
                Min time in traffic: {minTime} minutes
              </h4>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    timepoints: state.demo.timepoints,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOneTimePoint: () => dispatch(getOneTimePoint())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DemoDistance)
)
