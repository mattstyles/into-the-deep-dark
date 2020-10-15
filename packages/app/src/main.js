
import { render } from 'react-dom'
import { debug, scope, safe } from '@raid/addons'

// import { signal } from 'signals'
import { signal } from 'kunai'
import { App } from 'components/app'
// import { Navigation } from 'components/navigation'
import { Navigator } from '@itdd/router'
import { updateTick, update as tickUpdate } from 'core/tick'

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
// initialise(signal)
signal.register(tickUpdate)

// signal.observe(state => {
//   render(
//     <App>
//       <Navigation navigation={state.navigation} />
//     </App>,
//     el
//   )
// }, err => console.error(err))
signal.observe(state => {
  render(
    <App>
      <Navigator navigation={state.navigation} />
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
