
import { themeGet } from '@styled-system/theme-get'

// @TODO box shadow and border are currently over-ridden by card styling
// functions, which needs to be solved at the raid-ui end. Then we can remove
// the !important and the boxShadow will work.
const cards = {
  darken: props => ({
    bg: 'dark.400',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    border: '1px solid transparent !important'
  }),
  lighten: props => ({
    bg: 'light.100',
    borderRadius: themeGet('tokens.layout.rounding')(props),
    border: '1px solid transparent !important'
    // boxShadow: 1
  })
}

export const variants = {
  cards
}
