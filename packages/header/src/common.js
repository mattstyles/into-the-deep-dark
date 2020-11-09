
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { getTransition, Badge } from '@raid/kit'

import { Link } from '@itdd/router'

const StyledLink = styled(Link)(
  props => css({
    color: props.isSelected ? 'text.100' : 'text.500',
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
StyledLink.defaultProps = {
  variant: 'naked'
}

export const NavLink = ({
  route,
  currentPath,
  children,
  ...props
}) => {
  return (
    <StyledLink
      route={route}
      isSelected={currentPath === route}
      {...props}
    >
      {children}
    </StyledLink>
  )
}

export const NavBadge = styled(Badge)(
  css({
    px: 2,
    py: 1,
    bg: 'critical.500',
    color: 'white'
  })
)
NavBadge.defaultProps = {
  variant: 'circular'
}
