
import { signal, init } from 'kunai'

import { initialState } from './state'
import { update } from './updates'

export * as selectors from './selectors'
export { actions } from './actions'

signal.register(update)
init(initialState)
