
import {isEqual} from 'lodash'
import {getCurrentRoute} from './utils'

export class Route {
  route = '/'
  state = null

  constructor (props) {
    for (let key in props) {
      this[key] = props[key]
    }
  }

  isEqual (route) {
    return this.isRouteEqual(route) && isEqual(this.state, route.state)
  }

  isRouteEqual (route) {
    return this.route === route.route
  }

  /**
   * Disregards route keys as these are only assigned when the route hits the
   * browser history.
   */
  isStateEqual (route) {
    return isEqual(
      Object.assign({}, this.state, {key: null}),
      Object.assign({}, route.state, {key: null})
    )
  }
}

// Initial state
export const initial = {
  nav: {
    stack: [getCurrentRoute()],
    index: 0
  }
}
