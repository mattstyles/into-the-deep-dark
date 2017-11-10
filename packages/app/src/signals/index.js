
import {Signal} from 'raid'
import {adaptor, arc as createArc} from 'raid-addons'
import {initial} from 'raid-navigator'

import Tick from './ticker'

import {app} from 'core/constants'
import messages from 'core/messages/initial'

const state = {
  ...initial,
  messages,
  app: {
    tickSpeed: app.baseTickSpeed,
    tickModifier: 1
  }
}

export const signal = Signal.of(state)
export const connect = adaptor(signal)
export const arc = createArc(signal)
export const dispatch = type => payload => signal.emit({type, payload})
export const emit = (type, payload) => signal.emit({type, payload})

signal.mount(Tick.attach())
