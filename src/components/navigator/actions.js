
import {store} from 'signals/main'
import {Route} from './model'
import {history} from './history'
import {getCurrentRoute} from './utils'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  POP: 'navigator:pop',
  REPLACE: 'navigator:replace',
  NAVIGATE: 'navigator:navigate',
  BACK: 'navigator:back',
  FORWARD: 'navigator:forward'
}

export const onPush = event => {
  // store.emit({
  //   type: NAV_ACTIONS.PUSH,
  //   payload: new Route(event)
  // })
  // history.push(event.route, event.state)
  const {route, state} = event
  store.emit({
    type: NAV_ACTIONS.PUSH,
    payload: new Route({route, state})
  })
}

export const onGoBack = event => {
  // store.emit({
  //   type: NAV_ACTIONS.POP
  // })
  history.goBack()
}

export const onGoForward = event => {
  history.goForward()
}
