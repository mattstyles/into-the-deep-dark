
import { Stack, Card, Pre } from '@raid/kit'

const messageDisplay = messages => messages.map(message => {
  return (
    <Card key={message.id}>
      <Pre inset>{JSON.stringify(message, null, '  ')}</Pre>
    </Card>
  )
})

export const MessageList = ({
  messages
}) => {
  return (
    <Stack>
      {messageDisplay(messages)}
    </Stack>
  )
}
MessageList.displayName = 'MessageList'
