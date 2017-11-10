
import {match, patch, flow} from 'raid-addons'

import {arc} from 'signals'
import {app} from 'core/constants'
import actions from './actions'
import Tick from 'signals/ticker'

const {setAppSpeed} = actions

const scopeToApp = patch('app')

const arcSetTickSpeed = arc((state, event) => {
  const modifier = event.join()
  if (modifier === 0) {
    Tick.pause()
    return
  }

  Tick.setRate(event.join() * app.baseTickSpeed)

  if (Tick.isPaused) {
    Tick.resume()
  }
})

const onSetAppSpeed = scopeToApp((state, event) => ({
  ...state,
  tickSpeed: event.join() * app.baseTickSpeed,
  tickModifier: event.join()
}))

const tickControlUpdate = match([
  [setAppSpeed.is, flow(
    arcSetTickSpeed,
    onSetAppSpeed
  )]
])

export default tickControlUpdate
