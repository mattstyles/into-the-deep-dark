
import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { debug, scope, safe } from '@raid/addons'

import { signal } from 'kunai'
import { App } from 'components/app'
import { Navigator, routes } from '@itdd/router'
// import { updateTick, update as tickUpdate } from 'core/tick'
import { updateTick, update as tickUpdate } from '@itdd/tick'

import { LazyView } from 'views/lazy'

const Comms = React.lazy(() => import('@itdd/mod-comms'))
const Home = React.lazy(() => import('@itdd/mod-home'))
const Test = React.lazy(() => import('@itdd/mod-test'))

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  // Update ticks destroy logs so silence any event.type containing tick
  const scoped = scope((state, event) => !/silent/i.test(event.type))
  signal.register(scoped(debug('[app]')))
  // signal.register(debug('[all]'))

  signal.register(safe((state, event) => {
    window.state = state
  }))
}

signal.mount(updateTick.createStream())
signal.register(tickUpdate)

signal.observe(state => {
  render(
    <App>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigator navigation={state.navigation}>
          <Home route={routes.home} />
          <Test route={routes.test} />
          <Comms route={routes.comms} />
          <LazyView route='/lazy' />
        </Navigator>
      </Suspense>
    </App>,
    el
  )
}, err => console.error(err))

if (module.hot) {
  module.hot.dispose(() => {
    console.group('[HMR] dispose')
    console.log('disposing signal updates, detaching observers')
    // signal.disposeAll()
    // signal.detachAll()

    console.groupEnd('[HMR] dispose')
  })
  // Enable if you're happy with HMR for your app
  // module.hot.accept(() => {
  //   console.group('[HMR] accept')
  //   signal.emit({
  //     hmr: 'accept'
  //   })
  //   console.groupEnd('[HMR] accept')
  // })
}
