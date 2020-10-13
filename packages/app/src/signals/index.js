
import { Signal } from 'raid'
import { adaptor } from '@raid/addons'

import { initial as navigationState } from '@raid/navigator'
import { initialState as updateTickState } from 'core/tick'

const initial = {
  ...navigationState,
  ...updateTickState,
  message: 'app'
}

if (process.env.DEBUG) {
  console.log('Initial State')
  console.log(initial)
}

export const signal = new Signal(initial)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({ type, payload })
export const emit = (type, payload) => signal.emit({ type, payload })
