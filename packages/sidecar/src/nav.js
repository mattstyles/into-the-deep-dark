
import { Stack } from '@raid/kit'

import { connect } from 'kunai'
import { routes, selectors } from '@itdd/router'

import { NavLink } from './common'
import { CommsLink } from './nav/comms'

const { getCurrentRoutePath } = selectors

const NavComponent = ({
  currentPath
}) => {
  return (
    <Stack as='nav'>
      <NavLink route={routes.home} currentPath={currentPath}>Home</NavLink>
      <NavLink route={routes.test} currentPath={currentPath}>Test</NavLink>
      <CommsLink />
    </Stack>
  )
}

// Navigation stack is not pure so we don't want to memoize (i.e. by using
// reselect) here.
const navSelector = state => ({
  currentPath: getCurrentRoutePath(state)
})

export const Nav = connect(
  navSelector,
  NavComponent
)
