
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { Text, context, sx, map, apply } from '@raid/kit'

const reduce = map(apply(-1))

const variants = context({
  prop: 'variant',
  variants: {
    h1: {
      fontSize: [9, 8],
      lineHeight: [9, 8]
    },
    h2: {
      fontSize: [8, 7],
      lineHeight: [8, 7]
    },
    section: props => ({
      fontSize: reduce(themeGet('tokens.type.baseSize')(props)),
      textTransform: 'uppercase',
      fontFamily: 'main',
      color: themeGet('tokens.type.heading.muted')(props),
      letterSpacing: 'loose'
    })
  }
})

export const StyledHeading = styled(Text)(
  props => css({
    fontFamily: 'heading',
    fontWeight: 400,
    color: themeGet('tokens.type.heading.main')(props)
  }),
  variants,
  sx
)

const types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  section: 'h2'
}

const getVariantType = variant => {
  return types[variant] || 'div'
}

export const Heading = forwardRef((props, ref) => {
  return (
    <StyledHeading
      as={getVariantType(props.variant)}
      {...props}
    />
  )
})
Heading.defaultProps = {
  variant: 'h2'
}
