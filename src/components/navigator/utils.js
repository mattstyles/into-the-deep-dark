
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
    console.log('Route not found')
  }
  return route
}

/**
 * Grabs a matching route from the stack
 */
// export const getRoute = (stack, match) => {
//   // let newRoute = stack.forEach((route, index) => route.deepEqual(match)
//   //   ? index)
//   //
//   // stack.reduce()
//   if (!newRoute) {
//     console.log('Route not found in stack')
//   }
//   return newRoute
// }

/**
 * Uses window data to work out the current route
 */
export const getCurrentRoute = () => {
  return new Route({
    route: location.pathname,
    state: history.state
      ? Object.assign({}, history.state.state, {
        key: history.state.key
      })
      : {
        title: location.pathname
          .replace(/^./, '')
          .replace(/(^.)/, ch => ch.toUpperCase()) || 'Not Found',
        key: null
      }
  })
}
