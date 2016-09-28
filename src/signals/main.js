
import Signal from 'core/signal'

import {initial as nav} from 'core/navigator/model'

// var initialState = {
//   counter: 0,
//   nav
// }

var initialState = Object.assign({}, ...[
  nav,
  { base: {
    title: 'Tannhauser Gate',
    type: 'Grade II Starbase',
    codename: 'Copperhead',
    star: 'Achenar',
    planet: 'Achenar IV'
  }}
])

console.log(initialState)

export const store = new Signal(initialState)
