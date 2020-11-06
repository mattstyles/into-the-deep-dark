
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { Text as BaseText, context, sx } from '@raid/kit'

const variants = context({
  prop: 'variant',
  variants: {
    foo: {
      fontWeight: 600
    }
  }
})

export const Text = styled(BaseText)(
  props => css({
    fontFamily: 'main',
    color: themeGet('tokens.type.body.main')(props)
  }),
  variants,
  sx
)
