
const {location, history} = window
import {Route} from './model'

/**
 * Finds a child by its route id from the array of child elements
 * passed to Navigator
 */
export const getChild = (children, id) => {
  console.log('routing', id)
  let route = children.find(child => child.attrs.route === id)
  // console.log('found', id, route)
  if (!route) {
    console.log('Associated route view not found in navigator children')
  }
  return route
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
