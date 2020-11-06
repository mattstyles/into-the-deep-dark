
import { createSelector } from 'reselect'
import { patchSelector as patch } from './state'

export const getMessageOrder = patch('order', [])
export const getMessageData = patch('messages', {})

/**
 * @returns {Message[]}
 */
export const getMessages = createSelector(
  getMessageOrder,
  getMessageData,
  (order, data) => {
    return order.map(id => data[id])
  }
)

/**
 * @returns {Number}
 */
export const getNumMessages = createSelector(
  getMessageOrder,
  order => order.length
)

/**
 * @returns {Number}
 */
export const getNumUnreadMessages = createSelector(
  getMessages,
  messages => {
    return messages.filter(msg => !msg.isRead).length
  }
)

/**
 * @returns {Message}
 */
export const getMessageHead = createSelector(
  getMessageOrder,
  getMessageData,
  (order, data) => {
    return data[order[0]]
  }
)
