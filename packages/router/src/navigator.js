
import { Navigator as CoreNavigator } from '@raid/navigator'

// import { connect, signal } from 'signals'
import { connect, signal } from 'kunai'
import { routes, history, getNavigation } from './core'

// import { Home } from 'views/home'
// import { Test } from 'views/test'
import { CommsView } from '@itdd/mod-comms'

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

const AppNavigation = ({
  navigation
}) => {
  return (
    <CoreNavigator
      signal={signal}
      navigation={navigation}
      history={history}
      storage={null}
    >
      <Home route={routes.home} />
      <CommsView route={routes.comms} />
    </CoreNavigator>
  )
}

export const Navigator = connect(
  getNavigation,
  AppNavigation
)
