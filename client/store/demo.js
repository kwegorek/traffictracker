import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_ONE_POINT = 'GET_ONE_POINT'

/**
 * INITIAL STATE
 */
const initialState = {timepoints: []}

/**
 * ACTION CREATORS
 */
const getTimePoint = payload => ({type: GET_ONE_POINT, payload})

/**
 * THUNK CREATORS
 */
export const getOneTimePoint = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/samples')

    dispatch(getTimePoint(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_POINT:
      return {...state, timepoints: action.payload}

    default:
      return state
  }
}
