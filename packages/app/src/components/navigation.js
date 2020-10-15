
import { Navigator } from '@raid/navigator'

import { connect, signal } from 'signals'
import { routes, history, getNavigation } from 'core/routing'

import { Home } from 'views/home'
import { Test } from 'views/test'
import { CommsView } from '@itdd/mod-comms'

const AppNavigation = ({
  navigation
}) => {
  return (
    <Navigator
      signal={signal}
      navigation={navigation}
      history={history}
      storage={null}
    >
      <Home route={routes.home} />
      <Test route={routes.test} />
      <CommsView route={routes.comms} />
    </Navigator>
  )
}

export const Navigation = connect(
  getNavigation,
  AppNavigation
)
