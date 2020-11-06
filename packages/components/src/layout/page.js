
import { Screen, Grid } from '@raid/kit'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Content } from './content'

const Layout = styled(Grid)(
  props => css({
    gridTemplateColumns: '240px 3fr',
    gridTemplateAreas: "'aside content'",
    gridGap: 0
  })
)

const asideStyles = {
  gridArea: 'aside',
  position: 'sticky',
  top: 0,
  height: '100vh'
}

export const Page = ({
  Aside,
  children
}) => {
  return (
    <Screen>
      <Layout>
        <Aside sx={asideStyles} />
        <Content sx={{ gridArea: 'content' }}>
          {children}
        </Content>
      </Layout>
    </Screen>
  )
}
