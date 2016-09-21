
import {NAV_ACTIONS} from './actions'
import {history} from './history'
import {getRouteIndex, getCurrentRoute} from './utils'

// const STACK_LENGTH = 9

/**
 * Most interested in the state.nav.stack list
 * Event should contain an action and route descriptor model in the payload
 */
export const reducer = (state, event) => {
  let {stack, index} = state.nav
  let route = event.payload

  console.log('--> nav:reducer initial')
  console.log('action', event)
  console.log('index', index, 'stack', stack)
  console.log('route', route)
  console.log(`[${index}, ${stack.length - 1}]`)
  console.log('<-- nav:reducer initial')

  if (event.type === NAV_ACTIONS.PUSH) {
    // Don't push the same route on twice
    let stackRoute = stack[index]
    if (route.isRouteEqual(stackRoute) && route.isStateEqual(stackRoute)) {
      console.log('Same route, not pushing')
      return state
    }

    // If we're pushing into the middle of the stack then nuke it
    if (index < state.nav.stack.length - 1) {
      state.nav.stack = state.nav.stack.slice(0, index + 1)
    }

    state.nav.index = index + 1

    history.push(route.route, route.state)
    state.nav.stack.push(getCurrentRoute())

    // Pop the first entry if we've hit stack limit
    // if (stack.length > STACK_LENGTH) {
    //   stack.shift()
    // }

    return state
  }

  if (event.type === NAV_ACTIONS.POP) {
    console.warn('NAV.POP is deprecated, and the code is probably broken now')
    // console.log('   *** NAV pop')
    // // Should always be one route
    // if (stack.length === 1) {
    //   return state
    // }
    //
    // history.goBack()
    // state.nav.stack.pop()
    return state
  }

  if (event.type === NAV_ACTIONS.NAVIGATE) {
    console.log('--> Navigation Reducer')
    console.log('stack', stack)
    console.log('route', route)
    let routeIndex = getRouteIndex(stack, route)

    // If the route was found then use it
    if (routeIndex >= 0) {
      console.log('Found route', routeIndex)
      state.nav.index = routeIndex
      return state
    }

    console.log('Route not found')
    if (index === 0) {
      console.log('go back')
      state.nav.stack.unshift(getCurrentRoute())
      return state
    }

    if (index === stack.length - 1) {
      console.log('go forward')
      return state
    }

    console.log('<-- Navigation Reducer')

    return state
  }

  return state
}
