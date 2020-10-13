
import { safe, compress, patch } from '@raid/addons'
import { createTick } from 'core/streams'

export const actions = {
  tick: '@itdd/updateTick::silent',
  pause: '@itdd/updateTick/pause',
  resume: '@itdd/updateTick/resume',
  change: '@itdd/updateTick/changeRate'
}

export const updateTick = createTick({
  rate: 1000 / 8,
  type: actions.tick
})

const rootKey = 'updateTick'
export const initialState = {
  [rootKey]: {
    isRunning: true,
    lastDelta: 0
  }
}

const patched = patch(rootKey)
const onTick = patched((state, event) => {
  // console.log('tick tock', event, state)
  return {
    ...state,
    lastDelta: event.dt
  }
})

const onPause = patched((state, event) => {
  updateTick.pause()
  return {
    ...state,
    isRunning: false
  }
})

const onResume = patched((state, event) => {
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
