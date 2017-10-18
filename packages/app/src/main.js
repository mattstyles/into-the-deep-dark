
import {render} from 'react-dom'
import {App} from '@idd/components'

import {signal} from 'signals'
import {debug} from 'core/updates'
import Router from './router'

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
