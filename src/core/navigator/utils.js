
const {location, history} = window
import {Route} from './model'

/**
 * Compares actual url with route match based on length (including param length)
 */
function routeCompare (segments, route) {
  let exact = segments.length === route.length
  let paramMatch = segments.length === route.filter(r => !/^:/.test(r)).length
  return exact || paramMatch
}

/**
 * Finds a child by its route id from the array of child elements
 * passed to Navigator
 */
export const getChild = (children, id) => {
  let params = null
  let view = children.find(child => {
    let urlSegments = id.split('/').slice(1)
    let route = child.attrs.route.split('/').slice(1)
    params = {}

    // Quick elimination on segment length
    if (!routeCompare(urlSegments, route)) {
      return false
    }

    // Collect params and return match or not
    return route.reduce((res, segment, index) => {
      if (/^:/.test(segment)) {
        params[segment.replace(/^:/, '')] = urlSegments[index]
        return true
      }

      return segment === urlSegments[index]
    }, false)
  })

  if (!view) {
    console.log('Associated route view not found in navigator children')
  }
  return view
}

/**
 * Grabs a matching route index from the stack
 */
export const getRouteIndex = (stack, match) => {
  let route = stack.findIndex(r => r.isEqual(match))

  if (route < 0) {
    console.log('Route not found in stack')
  }
  return route
}

/**
 * Uses window data to work out the current route and state or initialise
 * with null props so that they exist for inspection
 */
export const getCurrentRoute = () => {
  return new Route({
    route: location.pathname,
    state: history.state
      ? Object.assign({}, history.state.state, {
        key: history.state.key
      })
      : {
        title: null,
        key: null
      }
  })
}

/**
 * Strips the root from the route and returns all subsequent parts as an array
 * @TODO this could be smarter by mapping to the params that the matched child
 * view requests
 */
export const generateParams = (route) => {
  return route.split('/').slice(2)
}
