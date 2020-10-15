
import { Signal } from 'raid'
import { adaptor, safe, compress } from '@raid/addons'

const initial = {}

const action = '@itdd/kunai/init'

export const signal = new Signal(initial)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({ type, payload })
export const emit = (type, payload) => signal.emit({ type, payload })

export const init = (state) => {
  console.log('Initialising', Object.keys(state), state)
  signal.emit({
    type: action,
    payload: state
  })
}

const initUpdate = compress({
  [action]: (state, payload) => {
    return {
      ...state,
      ...payload
    }
  }
})

signal.register(safe(initUpdate))
