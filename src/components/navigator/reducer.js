
import {NAV_ACTIONS} from './actions'
import {history} from './history'
import {getRouteIndex, getCurrentRoute} from './utils'

/**
 * Event should contain an action and route descriptor model in the payload.
 * A memory history is maintained in app state, primarily to display back and
 * forward buttons in the UI but this needs to sync with the browser history,
 * which might be longer.
 */
export const reducer = (state, event) => {
  let {stack, index} = state.nav
  let route = event.payload

  if (event.type === NAV_ACTIONS.PUSH) {
    let stackRoute = stack[index]
    if (route.isRouteEqual(stackRoute) && route.isStateEqual(stackRoute)) {
      return state
    }

    // If we're pushing into the middle of the stack then nuke it
    if (index < state.nav.stack.length - 1) {
      state.nav.stack = state.nav.stack.slice(0, index + 1)
    }

    history.push(route.route, route.state)
    state.nav.index = index + 1
    state.nav.stack.push(getCurrentRoute())

    return state
  }

  // Navigate to a route on the stack or assume we are moving outside of the
  // current memory history and using browser history so add those routes to
  // the memory history as we go
  if (event.type === NAV_ACTIONS.NAVIGATE) {
    let routeIndex = getRouteIndex(stack, route)

    // If the route was found then use it
    if (routeIndex >= 0) {
      state.nav.index = routeIndex
      return state
    }

    // If we're already at the start assume we're navigating backwards
    if (index === 0) {
      state.nav.stack.unshift(getCurrentRoute())
      return state
    }

    // If we're already at the tail assume we're navigating forwards
    // This should not happen
    if (index === stack.length - 1) {
      console.warn('navigator.goForward called but no forward route found')
      return state
    }

    return state
  }

  return state
}
