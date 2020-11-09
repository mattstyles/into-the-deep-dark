
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { createStructuredSelector } from 'reselect'
import {
  View, Spacer, Box,
  H1, Text, Button, ButtonGroup
} from '@raid/kit'

import { connect, emit } from 'kunai'
import { selectors, actions } from '@comms/core'

import { Main } from './main'

const onChangeMessage = (id) => () => {
  emit(actions.changeMessage, {
    id: id,
    change: null
  })
}

const onAddMessage = () => emit(actions.addMessage)

const Layout = styled(View)(
  css({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    maxHeight: '100vh',
    overflowY: 'hidden',
    px: 3
  })
)

const viewSelector = createStructuredSelector({
  messages: selectors.getMessages,
  head: selectors.getMessageHead,
  numMessages: selectors.getNumMessages,
  selectedMessage: selectors.getSelectedMessage
})

export const CommsView = ({
  messages,
  head,
  numMessages,
  selectedMessage
}) => {
  return (
    <Layout>
      <Box px={3}>
        <H1>Comms</H1>
        <Text>{`Length: ${numMessages}`}</Text>
        <Spacer py={2} />
        <ButtonGroup>
          <Button onClick={onAddMessage}>Add</Button>
          <Button onClick={onChangeMessage(head.id)}>Change</Button>
        </ButtonGroup>
      </Box>
      <Spacer py={2} />
      <Main messages={messages} selectedMessage={selectedMessage} />
    </Layout>
  )
}
CommsView.displayName = 'CommsView'

export default connect(
  viewSelector,
  CommsView
)
