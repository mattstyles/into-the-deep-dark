
import { extend } from '@raid/kit'
import { theme as outrun } from '@raid-ui/theme-outrun'

const background = {
  50: 'hsl(255, 85%, 5%)',
  75: 'hsl(255, 86%, 9%)',
  100: 'hsl(256, 58%, 16%)',
  200: 'hsl(255, 32%, 30%)',
  300: 'hsl(255, 23%, 44%)',
  400: 'hsl(255, 20%, 56%)',
  500: 'hsl(255, 18%, 68%)',
  600: 'hsl(255, 16%, 80%)',
  700: 'hsl(255, 12%, 90%)',
  800: 'hsl(260, 10%, 96%)',
  900: 'hsl(262, 6%, 99%)'
}

const backgroundTokens = {
  aside: `linear-gradient(115deg, ${outrun.colors.light['200']}, transparent)`
}

export const theme = extend(outrun)({
  colors: {
    background: background,
    primary: 'hsl(176, 60%, 51%)'
  },
  tokens: {
    bg: {
      ...backgroundTokens
    }
  }
})
