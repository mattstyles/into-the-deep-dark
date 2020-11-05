
import React, { Suspense } from 'react'
import { Screen, Grid } from '@raid/kit'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Loading } from '../loading'
import { Content } from './content'

const Sidecar = React.lazy(() => import('@itdd/sidecar'))

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
  children
}) => {
  return (
    <Screen>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Sidecar sx={asideStyles} />
        </Suspense>
        <Content sx={{ gridArea: 'content' }}>
          {children}
        </Content>
      </Layout>
    </Screen>
  )
}
