
import {render} from 'react-dom'
import {isIosSafari} from '@idd/components'

import {signal} from 'signals'
import AppContainer from './appContainer'
import {Tick} from 'signals/ticker'

import {debug} from 'core/updates'
import messageUpdate from 'core/messages/updates'

isIosSafari()

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  signal.register(debug({
    blacklist: [Tick.action]
  }))
}

signal.register(messageUpdate)

signal.observe(state => {
  render(
    <AppContainer />,
    el
  )
}, err => console.error(err))
