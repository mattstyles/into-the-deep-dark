
import { Stack, Card, Pre } from '@raid/kit'
import { Markdown } from '@raid-ui/markdown'
import { Heading } from '@itdd/components'

const messageDisplay = messages => messages.map(message => {
  return (
    <Card key={message.id} variant='lighten'>
      <Stack>
        <Heading variant='section'>{message.category}</Heading>
        <Heading variant='h2'>{message.title}</Heading>
        <Markdown>{message.body}</Markdown>
      </Stack>
      <Pre inset sx={{ whiteSpace: ['pre-wrap', 'pre-wrap'] }}>{JSON.stringify(message, null, '  ')}</Pre>
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
