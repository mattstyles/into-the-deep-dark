
import Signal from 'core/signal'

import nav from 'components/navigator/initialState'

var initialState = {
  counter: 0,
  nav
}

export const store = new Signal(initialState)
