
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { Stack, getTransition } from '@raid/kit'

import { connect } from 'kunai'
import { Link, routes, selectors } from '@itdd/router'

const { getCurrentRoutePath } = selectors

const NavLink = styled(Link)(
  props => css({
    color: props.isSelected ? 'text.100' : 'text.500'
  }),
  props => css({
    bg: 'transparent',
    py: 2,
    fontWeight: 600,
    transition: `${getTransition('background', 'main')(props)},  ${getTransition('color', 'main')(props)}`,
    '&:hover': {
      color: 'text.100',
      bg: 'light.200',
      textDecoration: 'none'
    }
  })
)
NavLink.defaultProps = {
  variant: 'naked'
}

const NavComponent = ({
  currentPath
}) => {
  return (
    <Stack as='nav'>
      <NavLink route={routes.home} isSelected={currentPath === routes.home}>Home</NavLink>
      <NavLink route={routes.test} isSelected={currentPath === routes.test}>Test</NavLink>
      <NavLink route={routes.comms} isSelected={currentPath === routes.comms}>Comms</NavLink>
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
