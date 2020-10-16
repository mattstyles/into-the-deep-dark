
import { render } from 'react-dom'
import { debug, scope, safe } from '@raid/addons'

import { signal } from 'kunai'
import { Page } from '@itdd/components'

import { App } from 'components/app'
import { Navigation } from 'components/navigation'

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

signal.observe(state => {
  render(
    <App>
      <Page>
        <Navigation navigation={state.navigation} />
      </Page>
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
