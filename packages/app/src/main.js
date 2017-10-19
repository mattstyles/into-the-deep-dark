
import {render} from 'react-dom'
import {App, isIosSafari} from '@idd/components'

import {signal} from 'signals'
import {debug} from 'core/updates'
import Router from './router'
import Navigation from 'components/navigation'

isIosSafari()

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  signal.register(debug)
}

signal.observe(state => {
  render(
    <App>
      <Navigation />
      <Router />
    </App>,
    el
  )
}, err => console.error(err))
