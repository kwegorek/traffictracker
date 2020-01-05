/* eslint-disable complexity */
/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
import axios from 'axios'
import history from '../history'
import store from '.'

/**
 * ACTION TYPES
 */

const GET_TRAFFIC_SAMPLES = 'GET_TRAFFIC_SAMPLES'

const GET_TRAFFIC_SAMPLES_BY_WEEK = 'GET_TRAFFIC_SAMPLES_BY_WEEK'
const GET_TRAFFIC_SAMPLES_AVERAGE = 'GET_TRAFFIC_SAMPLES_AVERAGE'

/**
 * INITIAL STATE
 */
const initialState = {
  trafficsamples: []
}

/**
 * ACTION CREATORS
 */
const getTrafficSamples = trafficsamples => ({
  type: GET_TRAFFIC_SAMPLES,
  trafficsamples
})

const getTrafficSamplesByWeek = trafficsamples => ({
  type: GET_TRAFFIC_SAMPLES_BY_WEEK,
  trafficsamples
})

const getTrafficSamplesOnAverage = trafficsamples => ({
  type: GET_TRAFFIC_SAMPLES_AVERAGE,
  trafficsamples
})
/**
 * THUNK CREATORS
 */
export const displayTrafficSamples = routeId => async dispatch => {
  try {
    const {data} = await axios.get('/api/trafficsamples/' + routeId)
    dispatch(getTrafficSamples(data))
    dispatch(getTrafficSamplesByWeek(data))
    dispatch(getTrafficSamplesOnAverage(data))
    return data
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRAFFIC_SAMPLES:
      return {...state, trafficsamples: action.trafficsamples}
    case GET_TRAFFIC_SAMPLES_BY_WEEK:
      let lastFromSample
      let start
      let milStartDate

      for (let i = 0; i < 1; i++) {
        lastFromSample = action.trafficsamples[i]
        start = new Date(lastFromSample.timepoint)
        milStartDate = start.getTime()
      }

      let filterd = action.trafficsamples
        .filter((item, indx) => {
          let date = new Date(item.timepoint)
          let milliseconds = date.getTime()

          let result = milStartDate - milliseconds

          if (result <= 7 * 24 * 3600 * 1000) {
            return item
          }
        })
        .map((item, indx) => ({
          x: indx,
          y: item.travelTimeSeconds,
          timepoint: item.timepoint
        }))
      return {...state, weeklytrafficsamples: filterd}

    case GET_TRAFFIC_SAMPLES_AVERAGE:
      let samples = action.trafficsamples.map((item, indx) => ({
        x: indx,
        y: item.travelTimeSeconds,
        timepoint: new Date(item.timepoint).toISOString().substring(5, 10)
      }))

      let temp
      let usedDate = {}
      let maxTimeArr = []
      let myObj = {timepoint: '', y: 0, x: 0}
      let counter = 0
      let mappedMaxTimeArr

      for (let i = 0; i < samples.length; i++) {
        let date = samples[i].timepoint
        counter = i

        if (usedDate[date] === undefined) {
          usedDate[date] = {timepoint: date, y: samples[i].y, x: i}
        } else {
          let newMaxTime = Math.max(samples[i].y, usedDate[date].y)
          usedDate[date] = {timepoint: date, y: newMaxTime, x: i}
        }
      }
      if (counter + 1 === samples.length) {
        Object.entries(usedDate).forEach(([key, val]) => {
          counter++

          maxTimeArr.push(val)
        })
      }

      if (maxTimeArr.length > 0) {
        mappedMaxTimeArr = maxTimeArr.map((elem, indx) => {
          return {x: elem.timepoint, y: elem.y}
        })
      }

      return {...state, maxTime: mappedMaxTimeArr}
    default:
      return state
  }
}
