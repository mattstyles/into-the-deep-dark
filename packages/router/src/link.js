
// import styled from 'styled-components'
// import { css } from '@styled-system/css'
import { string } from 'prop-types'
import { Button } from '@raid/kit'

import { push } from './core'

export const Link = (props) => {
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
Link.propTypes = {
  route: string
}
Link.defaultProps = {
  route: '#'
}
