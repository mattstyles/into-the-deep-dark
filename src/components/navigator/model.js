
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
    return this.route === route.route && isEqual(this.state, route.state)
  }
}

// Initial state
export const initial = {
  nav: {
    stack: [getCurrentRoute()],
    index: 0
  }
}
