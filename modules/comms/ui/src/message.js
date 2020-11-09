
import styled from 'styled-components'
import { Card, Stack, Pre } from '@raid/kit'
import { Markdown } from '@raid-ui/markdown'
import { Heading } from '@itdd/components'

const Container = styled(Card)({
  display: 'flex',
  flex: 1,
  flexDirection: 'column'
})
Container.defaultProps = {
  variant: 'lighten'
}

export const Message = ({
  message
}) => {
  return (
    <Container>
      <Stack>
        <Heading variant='section'>{message.category}</Heading>
        <Heading variant='h2'>{message.title}</Heading>
        <Markdown>{message.body}</Markdown>
      </Stack>
      <Pre inset sx={{ whiteSpace: ['pre-wrap', 'pre-wrap'] }}>{JSON.stringify(message, null, '  ')}</Pre>
    </Container>
  )
}
