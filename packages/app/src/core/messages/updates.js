
import {match, patch} from 'raid-addons'

import actions from './actions'
import {replace} from 'utils/collections'

const messageState = patch('messages')
const getById = id => msg => msg.id === id

const onSelect = messageState((state, event) => ({
  ...state,
  messages: replace(
    getById(event.join()),
    msg => ({
      ...msg,
      isRead: true
    }),
    state.messages
  ),
  selectedId: event.join()
}))

export default match([
  [actions.select.is, onSelect]
])
