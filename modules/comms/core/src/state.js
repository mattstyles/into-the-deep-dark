
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@itdd/utils'

import { createModel } from './models'

// Generate initial test data
const dummy = Array(10).fill(0).map(_ => createModel())
dummy.unshift(createModel({
  category: 'Engineering',
  title: 'Shipyard upgrade complete',
  body: `Engineers can now create grade III components and craft parts.

Materials like ardite, kevlar, and carbon composite can now be used to craft components.`
}))
// Recast the array as an associative object, keyed by id
const data = dummy.reduce((obj, model) => {
  obj[model.id] = model
  return obj
}, {})

/**
 * Messages are structured as an object keyed by the id of the message data.
 * The order is an array, holding the visual positions of the data in the
 * message object table.
 */
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
