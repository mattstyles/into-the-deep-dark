
import createHistory from 'history/createBrowserHistory'

import {store} from 'signals/main'
import {NAV_ACTIONS} from './actions'
import {getCurrentRoute} from './utils'

export const history = createHistory()

window.h = history

history.listen((location, action) => {
  console.log('--> History event')
  console.log('action', action)
  console.log('location', location)
  console.log('<-- History event')
  if (action === 'PUSH') {
    console.log('pushing', getCurrentRoute())
    store.emit({
      type: NAV_ACTIONS.PUSH,
      payload: getCurrentRoute()
    })
    return
  }

  if (action === 'POP') {
    console.log('  ** popdiping')
    // store.emit({
    //   type: NAV_ACTIONS.POP,
    //   payload: new Route({
    //     route: location.pathname,
    //     state: location.state
    //   })
    // })
    // store.emit({
    //   type: NAV_ACTIONS.POP
    // })
    // onPop({
    //   route: location.pathname,
    //   state: location.state
    // })
    return
  }
})
