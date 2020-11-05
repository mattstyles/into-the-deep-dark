
import React, { Suspense } from 'react'
import { Screen, Grid, View } from '@raid/kit'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Loading } from '../loading'

const Sidecar = React.lazy(() => import('@itdd/sidecar'))

const Layout = styled(Grid)(
  props => css({
    gridTemplateColumns: '240px 3fr',
    gridTemplateAreas: "'aside content'",
    gridGap: 6
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
        <View sx={{ gridArea: 'content' }}>
          {children}
        </View>
      </Layout>
    </Screen>
  )
}
