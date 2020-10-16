
import React, { Suspense } from 'react'
import { Screen, Grid, View } from '@raid/kit'
import styled from 'styled-components'
import { css } from '@styled-system/css'

import { Loading } from '../loading'

const Sidecar = React.lazy(() => import('@itdd/sidecar'))

const Layout = styled(Grid)(
  props => css({
    gridTemplateColumns: '1fr 3fr',
    gridTemplateAreas: "'aside content'",
    gridGap: 6
  })
)

export const Page = ({
  children
}) => {
  return (
    <Screen>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Sidecar sx={{ gridArea: 'aside' }} />
        </Suspense>
        <View sx={{ gridArea: 'content' }}>
          {children}
        </View>
      </Layout>
    </Screen>
  )
}
