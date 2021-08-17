import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import routes from './routes'
import trafficsample from './trafficsample'
import demo from './demo'

const reducer = combineReducers({user, routes, trafficsample, demo})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

console.log(store)

export default store
export * from './user'
