
import React, { Suspense } from 'react'
import { Text, Spacer } from '@raid/kit'

const Body = React.lazy(() => {
  return import('./lazyComponent')
})

export const LazyView = () => {
  return (
    <>
      <Text>Lazy view...</Text>
      <Spacer py={2} />
      <Suspense fallback={<div>Loading...</div>}>
        <Body />
      </Suspense>
    </>
  )
}
