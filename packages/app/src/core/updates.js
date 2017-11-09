
import {includes} from 'lodash/fp'
import {safe} from 'raid-addons'

export const debug = (opts = {
  blacklist: []
}) => safe((state, event) => {
  if (includes(event.type, opts.blacklist)) {
    return
  }
  console.log(event, '::', state)
})
