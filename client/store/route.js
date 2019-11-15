import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_ROUTE = 'GET_ROUTE'
const REMOVE_ROUTE = 'REMOVE_ROUTE'

/**
 * INITIAL STATE
 */
const defaultRoute = {}

/**
 * ACTION CREATORS
 */
const getRoute = route => ({type: GET_ROUTE, route})

/**
 * THUNK CREATORS
 */
export const displayRoutes = () => async dispatch => {
  try {
    const {data} = await axios.get('./api/routes')
    console.log('routes ----------', data)

    dispatch(getRoute(data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultRoute, action) {
  switch (action.type) {
    case GET_ROUTE:
      return action.route
    default:
      return state
  }
}
