
import {tail} from 'utils/functional'
import {NAV_ACTIONS} from './actions'
import {history} from './history'

const STACK_LENGTH = 9

/**
 * Most interested in the state.nav.stack list
 * Event should contain an action and route descriptor model in the payload
 */
export const reducer = (state, event) => {
  let {stack, index} = state.nav
  let route = event.payload

  console.log('--> nav:reducer')
  console.log('action', event)
  console.log('state', state)
  console.log('route', route)
  console.log('<-- nav:reducer')

  if (event.type === NAV_ACTIONS.PUSH) {
    // Don't push the same route on twice
    // if (route === tail(stack).route) {
    //   return state
    // }

    state.nav.index = index + 1

    // history.push(route.route, route.state)
    stack.push(route)

    // Pop the first entry if we've hit stack limit
    if (stack.length > STACK_LENGTH) {
      stack.shift()
    }

    return state
  }

  if (event.type === NAV_ACTIONS.POP) {
    // Should always be one route
    if (stack.length === 1) {
      return state
    }

    history.goBack()
    stack.pop()
    return state
  }

  return state
}
