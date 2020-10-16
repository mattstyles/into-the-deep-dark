
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'
import { updateTick } from './tick'

const onTick = patch((state, event) => {
  // console.log('tick tock', event, state)
  return {
    ...state,
    lastDelta: event.dt
  }
})

const onPause = patch((state, event) => {
  updateTick.pause()
  return {
    ...state,
    isRunning: false
  }
})

const onResume = patch((state, event) => {
  updateTick.resume()
  return {
    ...state,
    isRunning: true
  }
})

export const update = safe(compress({
  [actions.tick]: onTick,
  [actions.pause]: onPause,
  [actions.resume]: onResume
}))
