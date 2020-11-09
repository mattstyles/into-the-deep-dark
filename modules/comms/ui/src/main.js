
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Flex, Spacer } from '@raid/kit'

import { MessageList } from './list'
import { Message } from './message'

const Layout = styled(Flex)(
  props => css({
    flexDirection: 'row',
    flex: 1,
    overflowY: 'hidden'
  })
)

const Overview = styled(Flex)(
  css({
    flex: 0.25,
    overflowY: 'auto',
    px: 3,
    pt: 3
  })
)

const Detail = styled(Flex)(
  css({
    flex: 1,
    mt: 3
  })
)

export const Main = ({
  messages,
  selectedMessage
}) => {
  return (
    <Layout>
      <Overview>
        <MessageList messages={messages} selectedMessageId={selectedMessage.id} />
      </Overview>
      <Spacer px={3} />
      <Detail>
        <Flex flex={1}>
          <Message message={selectedMessage} />
        </Flex>
        <Spacer pb={4} />
      </Detail>
    </Layout>
  )
}
