
import { extend } from '@raid/kit'
import { theme as outrun } from '@raid-ui/theme-outrun'

import { background } from './colours'

export const theme = extend(outrun)({
  colors: {
    background: background,
    primary: 'hsl(176, 60%, 51%)'
  }
})
