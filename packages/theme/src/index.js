
import { extend } from '@raid/kit'
import { theme as outrun } from '@raid-ui/theme-outrun'

import { background } from './colours'
import { tokens } from './tokens'

export const theme = extend(outrun)({
  colors: {
    background: background,
    primary: 'hsl(176, 60%, 51%)'
  },
  tokens: {
    ...tokens
  }
})
