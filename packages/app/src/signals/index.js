
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'
import {initial} from 'raid-navigator'

const state = {
  ...initial
}

export const signal = Signal.of(state)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({type, payload})
export const emit = (type, payload) => signal.emit({type, payload})
