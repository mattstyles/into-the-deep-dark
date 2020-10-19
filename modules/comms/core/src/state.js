
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@itdd/core'

import { createModel } from './models'

const dummy = Array(10).fill(0).map(_ => createModel())
const data = dummy.reduce((obj, model) => {
  obj[model.id] = model
  return obj
}, {})

// @TODO use an object with id keys and an order array of ids
// we will need to do quite a few finds and the list could get fairly
// large so the 0-time lookup is desirable
const shape = {
  messages: data,
  order: dummy.map(model => model.id)
}

const rootKey = 'comms'
export const initialState = {
  [rootKey]: shape
}

export const patchUpdate = corePatch(rootKey)
export const patchSelector = selectorPatch(rootKey)
