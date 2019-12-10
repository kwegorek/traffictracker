/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as Footer} from './footer'
export {default as UserHome} from './userhome'
export {default as AllRoutes} from './allroutes'
export {default as Statistics} from './statistics'
export {default as SingleRoute} from './singleroute'
export {default as RouteView} from './routeview'
export {Login, Signup} from './auth-form'
