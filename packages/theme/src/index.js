
import { extend } from '@raid/kit'
import { theme as outrun } from '@raid-ui/theme-outrun'

import { background } from './colours'
import { tokens } from './tokens'
import { variants } from './variants'

export const theme = extend(outrun)({
  colors: {
    background: background,
    primary: 'hsl(176, 60%, 51%)'
  },
  fonts: {
    fallback: '"Gotham Rounded SSm A", "Gotham Rounded SSm B", ' + outrun.fonts.fallback,
    main: '"Gotham Rounded SSm A", "Gotham Rounded SSm B", ' + outrun.fonts.main,
    heading: '"Tungsten Narrow A", "Tungsten Narrow B", ' + outrun.fonts.heading
  },
  tokens,
  variants
})
