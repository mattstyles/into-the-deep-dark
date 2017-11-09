
import {Signal} from 'raid'
import {adaptor} from 'raid-addons'
import {initial} from 'raid-navigator'

import messages from 'core/messages/initial'

import {Tick} from './ticker'
const tick = Tick.of({
  // 8 updates per section
  rate: 1000 / 8,
  // If the window is unfocussed the elapsed time will accrue, this setting
  // spits it out in one go
  consume: true
})

const state = {
  ...initial,
  messages
}

export const signal = Signal.of(state)
export const connect = adaptor(signal)
export const dispatch = type => payload => signal.emit({type, payload})
export const emit = (type, payload) => signal.emit({type, payload})

signal.mount(tick.attach())
