
import {store} from 'signals/main'
import {Route} from './model'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  POP: 'navigator:pop',
  REPLACE: 'navigator:replace'
}

export const onPush = event => {
  store.emit({
    type: NAV_ACTIONS.PUSH,
    payload: new Route(event)
  })
}

export const onPop = event => {
  store.emit({
    type: NAV_ACTIONS.POP
  })
}
