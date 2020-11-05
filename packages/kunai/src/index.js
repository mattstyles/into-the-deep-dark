
import { Signal } from 'raid'
import { adaptor, safe, compress } from '@raid/addons'
import { log } from '@itdd/utils'

const initial = {
  message: 'into the deep dark'
}

const actions = {
  init: '@itdd/kunai/init'
}

export const signal = new Signal(initial)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({ type, payload })
export const emit = (type, payload) => signal.emit({ type, payload })

export const init = (state) => {
  log('Initialising', Object.keys(state), state)
  signal.emit({
    type: actions.init,
    payload: state
  })
}

const initUpdate = compress({
  [actions.init]: (state, payload) => {
    return {
      ...state,
      ...payload
    }
  }
})

signal.register(safe(initUpdate))
