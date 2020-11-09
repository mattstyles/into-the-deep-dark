
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'
import { createModel } from './models'

const onAddMessage = patch((state, payload) => {
  const model = createModel()
  state.messages[model.id] = model
  return {
    ...state,
    order: [model.id, ...state.order]
  }
})

const onChangeMessage = patch((state, payload) => {
  const msg = state.messages[payload.id]
  // inplace data mutations will still trigger UI updates
  // got to be careful though as createSelector memoizes so mutating
  // inplace is risking a simple mistake
  msg.title = Math.random() * 1e10 >>> 1
  return state
})

const onSelectMessage = patch((state, payload) => {
  return {
    ...state,
    selectedId: payload.id
  }
})

export const update = safe(compress({
  [actions.addMessage]: onAddMessage,
  [actions.changeMessage]: onChangeMessage,
  [actions.selectMessage]: onSelectMessage
}))
