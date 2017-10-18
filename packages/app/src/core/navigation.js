
import {createSelector} from 'reselect'
import {connect, signal} from 'signals'
import {Navigator, push} from 'raid-navigator'
import {Button} from '@idd/components'

const getNavigation = state => state.navigation

export const Navigation = connect(
  createSelector(
    getNavigation,
    navigation => ({
      navigation,
      signal
    })
  ),
  Navigator
)

export const Link = ({children, route, state}) => (
  <Button
    onClick={event => push(route, state)}
    inline
  >
    {children}
  </Button>
)

export const getCurrentPath = createSelector(
  getNavigation,
  ({index, stack}) => ({
    currentPath: stack[index].pathname
  })
)
