
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'
import {initial} from 'raid-navigator'

import messages from 'core/messages/initial'

const state = {
  ...initial,
  messages
}

export const signal = Signal.of(state)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({type, payload})
export const emit = (type, payload) => signal.emit({type, payload})
