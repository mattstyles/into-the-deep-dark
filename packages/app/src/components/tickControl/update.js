
import {match, patch} from 'raid-addons'

import {app} from 'core/constants'
import actions from './actions'

const {setAppSpeed} = actions

const scopeToApp = patch('app')

const onSetAppSpeed = scopeToApp((state, event) => ({
  ...state,
  tickSpeed: event.join() * app.baseTickSpeed,
  tickModifier: event.join()
}))

const tickControlUpdate = match([
  [setAppSpeed.is, onSetAppSpeed]
])

export default tickControlUpdate
