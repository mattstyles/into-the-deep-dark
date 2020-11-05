
import { theme as outrun } from '@raid-ui/theme-outrun'

const backgroundTokens = {
  aside: `linear-gradient(115deg, ${outrun.colors.light['200']}, transparent)`,

  // background.100 at 60%. outrun critical.500 at 26% as accent colour.
  content: `linear-gradient(135deg, ${outrun.colors.light['200']}, hsl(256, 58%, 16%, 0.6), transparent), radial-gradient(farthest-side at 80% 10%, hsla(329, 100%, 54%, 0.26), transparent 40%)`
}

export const tokens = {
  bg: {
    ...backgroundTokens
  }
}
