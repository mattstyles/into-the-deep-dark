
import Signal from 'core/signal'

export var initialState = {
  counter: 0
}

export const store = new Signal(initialState)
