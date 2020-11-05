
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@itdd/utils'

const shape = {
  isRunning: true,
  lastDelta: 0
}

const rootKey = 'updateTick'
export const initialState = {
  [rootKey]: shape
}

export const patchUpdate = corePatch(rootKey)
export const patchSelector = selectorPatch(rootKey)
