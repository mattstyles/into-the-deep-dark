
import React, { Suspense } from 'react'

import { Navigator, routes } from '@itdd/router'
import { Loading } from '@itdd/components'
import config from '@itdd/configApp'

const defaultPageDelay = config.pageLoadDelay

const delay = ms => ({
  then: resolve => setTimeout(resolve, ms)
})

// This is a bit annoying as it must be a string and can not be a dynamic property for import to work properly when bundled
const Comms = React.lazy(() => Promise.all([
  import('@itdd/mod-comms'),
  delay(defaultPageDelay)
]).then(([mod]) => mod))
const Home = React.lazy(() => Promise.all([
  import('@itdd/mod-home'),
  delay(defaultPageDelay)
]).then(([mod]) => mod))
const Test = React.lazy(() => Promise.all([
  import('@itdd/mod-test'),
  delay(defaultPageDelay)
]).then(([mod]) => mod))

// Suspense fallback is currently a modal, this will likely change as there
// is a single page layout for the entire app and the page components will
// be composed into the body so a loading would need to centralise inside
// the body, not as an entire screen overlay.
export const Navigation = ({
  navigation
}) => {
  return (
    <Suspense fallback={<Loading sx={{ py: 10 }} />}>
      <Navigator navigation={navigation}>
        <Home route={routes.home} />
        <Test route={routes.test} />
        <Comms route={routes.comms} />
      </Navigator>
    </Suspense>
  )
}
