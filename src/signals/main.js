
import Signal from 'core/signal'

import {initial as nav} from 'components/navigator/model'

// var initialState = {
//   counter: 0,
//   nav
// }

var initialState = Object.assign({}, ...[
  nav
])

console.log(initialState)

export const store = new Signal(initialState)
