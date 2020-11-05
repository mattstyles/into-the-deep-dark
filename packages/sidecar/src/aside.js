
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { View } from '@raid/kit'

export const Aside = styled(View)(
  props => css({
    p: themeGet('tokens.layout.padding')(props)
  })
)
Aside.defaultProps = {
  as: 'aside'
}
