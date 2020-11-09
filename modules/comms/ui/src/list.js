
import { Stack, Card, Pre } from '@raid/kit'
import { Markdown } from '@raid-ui/markdown'
import { Heading } from '@itdd/components'

const messageDisplay = messages => messages.map(message => {
  return (
    <Card key={message.id} variant='lighten' sx={{ mb: 4 }}>
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
    <>
      {messageDisplay(messages)}
    </>
  )
}
MessageList.displayName = 'MessageList'
