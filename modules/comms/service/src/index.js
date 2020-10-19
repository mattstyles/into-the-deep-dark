
/**
 * There is an issue here, unless something imports this module then it
 * will never run as it is entirely detached. Hmm, there is still a case for
 * a service module for logic handling, but something has to import it.
 * Updates should probably move to core as that will always be imported
 * by the UI in order to be used.
 * This makes additional sense to do as the data slice is owned by core.
 */

// import { signal } from 'kunai'
//
// import { update } from './updates'
//
// console.log('Registering comms updates')
// signal.register(update)
