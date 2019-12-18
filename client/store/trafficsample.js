import axios from 'axios'
import history from '../history'
import store from '.'

/**
 * ACTION TYPES
 */

const GET_TRAFFIC_SAMPLES = 'GET_TRAFFIC_SAMPLES'

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

/**
 * THUNK CREATORS
 */
export const displayTrafficSamples = routeId => async dispatch => {
  try {
    const {data} = await axios.get('/api/trafficsamples/' + routeId)
    dispatch(getTrafficSamples(data))
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
    default:
      return state
  }
}
