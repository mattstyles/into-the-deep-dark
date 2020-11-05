
import styled from 'styled-components'
import { css } from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { View } from '@raid/kit'

export const Content = styled(View)(
  props => css({
    p: themeGet('tokens.layout.padding')(props),
    background: themeGet('tokens.bg.content')(props),
    backgroundAttachment: 'fixed'
  })
)
Content.defaultProps = {
  as: 'main'
}
