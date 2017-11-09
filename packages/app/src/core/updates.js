
import {includes} from 'lodash/fp'
import {safe} from 'raid-addons'

/**
 * Blacklists certain events, works with typed events
 * and {type, payload} events
 */
export const debug = (opts = {
  blacklist: []
}) => safe((state, event) => {
  if (includes(event.type, opts.blacklist)) {
    return
  }
  if (opts.blacklist.reduce((flag, type) => {
    return flag || (type.is && type.is(event))
  }, false)) {
    return
  }
  console.log(event, '::', state)
})
