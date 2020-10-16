
import { signal, init } from 'kunai'

import { initialState } from './state'
import { updateTick } from './tick'
import { update } from './update'

export { actions } from './actions'
export * as selectors from './selectors'

// Need to go careful here, its probably fine, but during initial testing on the the test module imported tick, which means that tick will be lazy loaded along with test. This is probably fine as it will exist (and be mounted and registered) before anything that wants it starts using it, the advantage being that the logic will only be loaded in to the page on demand.
signal.mount(updateTick.createStream())
signal.register(update)

init(initialState)
