
import { render } from 'react-dom'
import { debug, scope } from '@raid/addons'

import { signal } from 'signals'
import { App } from 'components/app'
import { Navigation } from 'components/navigation'
import { createTick } from 'core/streams'

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  // Update ticks destroy logs so silence any event.type containing tick
  const scoped = scope((state, event) => !/tick/i.test(event.type))
  signal.register(scoped(debug('[app]')))
  // signal.register(debug('[all]'))
}

signal.mount(createTick({
  rate: 1000 / 8,
  type: '@itdd/updateTick'
}))

signal.observe(state => {
  render(
    <App>
      <Navigation navigation={state.navigation} />
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
