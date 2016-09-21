
import createHistory from 'history/createBrowserHistory'

import {store} from 'signals/main'
import {NAV_ACTIONS} from './actions'
import {getCurrentRoute} from './utils'

export const history = createHistory()

// Listen for pop events from navigating using history
history.listen((location, action) => {
  if (action === 'POP') {
    store.emit({
      type: NAV_ACTIONS.NAVIGATE,
      payload: getCurrentRoute()
    })
    return
  }
})
