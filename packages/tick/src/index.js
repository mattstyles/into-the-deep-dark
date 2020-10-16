
import { signal, init } from 'kunai'

import { initialState } from './state'
import { updateTick } from './tick'
import { update } from './update'

export { actions } from './actions'
export * as selectors from './selectors'

signal.mount(updateTick.createStream())
signal.register(update)

init(initialState)
