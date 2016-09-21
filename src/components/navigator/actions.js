
import {store} from 'signals/main'
import {Route} from './model'
import {history} from './history'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  REPLACE: 'navigator:replace',
  NAVIGATE: 'navigator:navigate',
  BACK: 'navigator:back',
  FORWARD: 'navigator:forward'
}

export const push = event => {
  const {route, state} = event
  store.emit({
    type: NAV_ACTIONS.PUSH,
    payload: new Route({route, state})
  })
}

export const back = event => {
  history.goBack()
}

export const forward = event => {
  history.goForward()
}
