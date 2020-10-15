
import { Navigator as CoreNavigator } from '@raid/navigator'

import { connect, signal } from 'kunai'

import { history, getNavigation } from './core'

const AppNavigation = ({
  navigation,
  children
}) => {
  return (
    <CoreNavigator
      signal={signal}
      navigation={navigation}
      history={history}
      storage={null}
    >
      {children}
    </CoreNavigator>
  )
}

export const Navigator = connect(
  getNavigation,
  AppNavigation
)
