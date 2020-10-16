
import styled from 'styled-components'
import { css } from '@styled-system/css'

export { Loading, LoadModal } from './loading'
export { Page } from './layout/page'

export const TestComponent = styled('div')(
  css({
    color: 'white',
    bg: 'primary',
    px: 6,
    py: 2
  })
)
