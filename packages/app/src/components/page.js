
import React, { Suspense } from 'react'
import { Screen } from '@raid/kit'

import { Page as Layout, Loading } from '@itdd/components'

const Sidecar = React.lazy(() => import('@itdd/sidecar'))

const Aside = ({ sx }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Sidecar sx={sx} />
    </Suspense>
  )
}

export const Page = ({ children }) => {
  return (
    <Screen>
      <Layout Aside={Aside}>
        {children}
      </Layout>
    </Screen>
  )
}
