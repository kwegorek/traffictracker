import axios from 'axios'
import history from '../history'
import store from '.'
const API_KEY = 'XXXXXXXXXXX'

// /**
//  * ACTION TYPES
//  */

const GET_DISTANCE = 'GET_DISTANCE'
// /**
//  * INITIAL STATE
//  */
const initialState = {
  distance: []
}

// /**
//  * ACTION CREATORS
//  */
const getDistanceAction = distance => ({
  type: GET_DISTANCE,
  distance
})

// /**
//  * THUNK CREATORS
//  */

// //If you pass an address, the service geocodes the string and
// // converts it to a latitude/longitude coordinate to calculate distance
export const checkDestination = val => async dispatch => {
  try {
    const {data} = await axios.post(val, '/api/distance')
    getDistanceAction(data)
    console.log('distance api', data)
    return data
  } catch (err) {
    console.error(err)
  }
}

// /**
//  * REDUCER
//  */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DISTANCE:
      return {...state, distance: action.distance}
    default:
      return state
  }
}
