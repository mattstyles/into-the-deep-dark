
import styled from 'styled-components'
import { css } from '@styled-system/css'

export const TestComponent = styled('div')(
  css({
    color: 'white',
    bg: 'primary',
    px: 6,
    py: 2
  })
)
