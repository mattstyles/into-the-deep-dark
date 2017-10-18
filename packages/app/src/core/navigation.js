
import {createSelector} from 'reselect'
import {connect, signal} from 'signals'
import {Navigator, push} from 'raid-navigator'

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
  <button onClick={event => push(route, state)}>
    {children}
  </button>
)

export const getCurrentPath = createSelector(
  getNavigation,
  ({index, stack}) => ({
    currentPath: stack[index].pathname
  })
)
