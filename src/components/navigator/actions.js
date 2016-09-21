
import {store} from 'signals/main'
import {Route} from './model'
import {history} from './history'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  NAVIGATE: 'navigator:navigate',

  // @TODO
  REPLACE: 'navigator:replace'
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
