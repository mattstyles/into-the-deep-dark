
import {createSelector} from 'reselect'
import {compose, prop} from 'lodash/fp'

const root = ({messages}) => messages

export const getMessages = compose(
  prop('messages'),
  root
)

export const getSelectedMessageId = compose(
  prop('selectedId'),
  root
)

export const getCurrentMessage = createSelector(
  getMessages,
  getSelectedMessageId,
  (messages, id) => messages.find(msg => msg.id === id)
)
