
import {render} from 'react-dom'
import {App, isIosSafari} from '@idd/components'

import {signal} from 'signals'
import {debug} from 'core/updates'
import Router from './router'

isIosSafari()

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  signal.register(debug)
}

signal.observe(state => {
  render(
    <App>
      <Router />
    </App>,
    el
  )
}, err => console.error(err))
