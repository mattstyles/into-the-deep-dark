
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Flex, Spacer } from '@raid/kit'

import { MessageList } from './list'

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
    overflowY: 'auto'
  })
)

const Detail = styled(Flex)({
  flex: 1
})

export const Main = ({
  messages
}) => {
  return (
    <Layout>
      <Overview>
        <MessageList messages={messages} />
      </Overview>
      <Spacer px={3} />
      <Detail>
        <Flex flex={1} bg='positive.400' />
        <Spacer pb={4} />
      </Detail>
    </Layout>
  )
}
