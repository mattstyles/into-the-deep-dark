
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Grid, Box, Flex } from '@raid/kit'

import { MessageList } from './list'

const Layout = styled(Grid)(
  props => css({
    gridTemplateColumns: '1fr 4fr',
    gridGap: 6,
    flex: 1
  })
)

const Wrapper = styled(Flex)(
  css({
    flex: 1,
    overflowY: 'auto'
  })
)

export const Main = ({
  messages
}) => {
  return (
    <Wrapper>
      <Layout>
        <MessageList messages={messages} />
        <Box bg='positive.400' />
      </Layout>
    </Wrapper>
  )
}
