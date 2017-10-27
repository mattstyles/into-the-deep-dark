
import {render} from 'react-dom'
import {isIosSafari} from '@idd/components'

import {signal} from 'signals'
import {debug} from 'core/updates'
import AppContainer from './appContainer'

isIosSafari()

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  signal.register(debug)
}

signal.observe(state => {
  render(
    <AppContainer />,
    el
  )
}, err => console.error(err))
