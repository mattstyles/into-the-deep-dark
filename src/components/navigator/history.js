
import {onPop} from './actions'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

window.h = history

history.listen((location, action) => {
  console.log(action, location)
  if (action === 'PUSH') {
    // store.emit({
    //   type: NAV_ACTIONS.PUSH,
    //   route: location.pathname
    // })
    console.log('  ** pushing')
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
    onPop({
      route: location.pathname,
      state: location.state
    })
    return
  }
})
