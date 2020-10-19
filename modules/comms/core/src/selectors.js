
import { createSelector } from 'reselect'
import { patchSelector as patch } from './state'

export const getMessageOrder = patch('order', [])
export const getMessageData = patch('messages', {})

export const getMessages = createSelector(
  getMessageOrder,
  getMessageData,
  (order, data) => {
    return order.map(id => data[id])
  }
)

export const getNumMessages = createSelector(
  getMessageOrder,
  order => order.length
)

export const getMessageHead = createSelector(
  getMessageOrder,
  getMessageData,
  (order, data) => {
    return data[order[0]]
  }
)
