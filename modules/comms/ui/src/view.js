
import { createStructuredSelector } from 'reselect'
import {
  View, Spacer,
  H1, Text, Button, ButtonGroup
} from '@raid/kit'

import { connect, emit } from 'kunai'
import { selectors, actions } from '@comms/core'

import { MessageList } from './list'

const viewSelector = createStructuredSelector({
  messages: selectors.getMessages,
  head: selectors.getMessageHead,
  numMessages: selectors.getNumMessages
})

const onChangeMessage = (id) => () => {
  emit(actions.changeMessage, {
    id: id,
    change: null
  })
}

export const CommsView = ({
  messages,
  head,
  numMessages
}) => {
  return (
    <View>
      <H1>Comms</H1>
      <Text>{`Length: ${numMessages}`}</Text>
      <Spacer py={2} />
      <ButtonGroup>
        <Button onClick={() => emit(actions.addMessage)}>Add</Button>
        <Button onClick={onChangeMessage(head.id)}>Change</Button>
      </ButtonGroup>
      <Spacer py={2} />
      <MessageList messages={messages} />
    </View>
  )
}
CommsView.displayName = 'CommsView'

export default connect(
  viewSelector,
  CommsView
)
