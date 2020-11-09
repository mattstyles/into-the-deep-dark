
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Stack, Card, focus, getTransition } from '@raid/kit'
import { Heading, Text } from '@itdd/components'

import { actions } from '@comms/core'
import { dispatch } from 'kunai'

const dispatchSelectMessage = dispatch(actions.selectMessage)
const onSelectMessage = message => event => {
  dispatchSelectMessage({
    id: message.id
  })
}

const highlightTransform = 'scale(1.08)'
const Container = styled(Card)(
  props => css({
    mt: 1,
    mx: 0,
    mb: 3,
    appearance: 'none',
    textAlign: 'left',
    transition: `${getTransition('transform')(props)}, ${getTransition('background')(props)}`,

    ':first-of-type': {
      mt: 0
    },
    ':last-of-type': {
      mb: 0
    },

    '&:hover': {
      transform: highlightTransform
    }
  }),
  focus,
  props => props.isSelected && css({
    bg: 'light.200'
  })
)
Container.defaultProps = {
  variant: 'lighten',
  as: 'button'
}

const Message = ({
  message,
  selectedMessageId
}) => {
  return (
    <Container onClick={onSelectMessage(message)} isSelected={message.id === selectedMessageId}>
      <Stack>
        <Heading variant='section'>{message.category}</Heading>
        <Text variant='h2'>{message.title}</Text>
      </Stack>
    </Container>
  )
}

const messageDisplay = (messages, selectedMessageId) => messages.map(message => {
  return <Message key={message.id} message={message} selectedMessageId={selectedMessageId} />
})

export const MessageList = ({
  messages,
  selectedMessageId
}) => {
  return (
    <>
      {messageDisplay(messages, selectedMessageId)}
    </>
  )
}
MessageList.displayName = 'MessageList'
