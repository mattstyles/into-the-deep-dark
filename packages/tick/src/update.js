
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'
import { updateTick } from './tick'

const onTick = patch((state, payload) => {
  // console.log('tick tock', event, state)
  return {
    ...state,
    lastDelta: payload.dt
  }
})

const onPause = patch((state, payload) => {
  updateTick.pause()
  return {
    ...state,
    isRunning: false
  }
})

const onResume = patch((state, payload) => {
  updateTick.resume()
  return {
    ...state,
    isRunning: true
  }
})

const onChange = patch((state, payload) => {
  updateTick.setRate(payload)
  return state
})

// Need to go slightly careful here as compress changes the function signature from event{type,payload} to just payload. So the updates above must consider that their 2nd parameter is a payload object, not an event one.
export const update = safe(compress({
  [actions.tick]: onTick,
  [actions.pause]: onPause,
  [actions.resume]: onResume,
  [actions.change]: onChange
}))
