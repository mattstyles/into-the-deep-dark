
// import styled from 'styled-components'
// import { css } from '@styled-system/css'
import { string } from 'prop-types'
import { Button } from '@raid/kit'

import { push } from 'core/routing'

export const NavLink = (props) => {
  const onClick = (event) => {
    event.preventDefault()

    if (props.onClick) {
      props.onClick(event)
    }

    push({
      route: props.route,
      state: props.state
    })
  }

  return (
    <Button as='a' href={props.route} {...props} onClick={onClick}>
      {props.children}
    </Button>
  )
}
NavLink.propTypes = {
  route: string
}
NavLink.defaultProps = {
  route: '#'
}
