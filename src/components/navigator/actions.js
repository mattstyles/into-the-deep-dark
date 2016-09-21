
import {store} from 'signals/main'
import {Route} from './model'
import {history} from './history'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  POP: 'navigator:pop',
  REPLACE: 'navigator:replace'
}

export const onPush = event => {
  // store.emit({
  //   type: NAV_ACTIONS.PUSH,
  //   payload: new Route(event)
  // })
  history.push(event.route, event.state)
}

export const onPop = event => {
  // store.emit({
  //   type: NAV_ACTIONS.POP
  // })
  history.goBack()
}
