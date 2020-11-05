
import { Stack, Card, Pre, Text } from '@raid/kit'
import { Markdown } from '@raid-ui/markdown'

const messageDisplay = messages => messages.map(message => {
  return (
    <Card key={message.id} variant='lighten'>
      <Pre inset>{JSON.stringify(message, null, '  ')}</Pre>
      <Stack>
        <Text as='h2'>{message.title}</Text>
        <Markdown>{message.body}</Markdown>
      </Stack>
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
