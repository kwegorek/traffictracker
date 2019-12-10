import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_ONE_ROUTE = 'GET_ONE_ROUTE'
const GET_ROUTES = 'GET_ROUTES'
const ADD_ROUTE = 'ADD_ROUTE'
const REMOVE_ROUTE = 'REMOVE_ROUTE'

/**
 * INITIAL STATE
 */
const initialState = {routes: []}

/**
 * ACTION CREATORS
 */
const getRoutes = routes => ({type: GET_ROUTES, routes})

const addRoute = added => ({type: ADD_ROUTE, added})

const deleteRoute = routeid => ({type: REMOVE_ROUTE, routeid})

/**
 * THUNK CREATORS
 */
export const displayRoutes = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/routes')
    dispatch(getRoutes(data))
  } catch (err) {
    console.error(err)
  }
}

export const displayOneRoute = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/routes/:${id}`)

    dispatch(getOneRoute(data))
  } catch (err) {
    console.error(err)
  }
}

export const addRouteThunk = route => async dispatch => {
  try {
    const {data} = await axios.post('/api/routes', route)
    console.log('---adddd>')
    dispatch(addRoute(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteRouteThunk = routeid => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/routes/${routeid}`)

    console.log('delete one', data)

    dispatch(deleteRoute(routeid))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROUTES:
      return {...state, routes: action.routes}
    case GET_ONE_ROUTE:
      return {...state, route: action.route}
    case ADD_ROUTE:
      let newState = state.routes.concat(action.added)
      return {...state, routes: newState}

    case REMOVE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route.id !== action.routeid)
      }
    default:
      return state
  }
}

console.log(initialState, 'initialState')
