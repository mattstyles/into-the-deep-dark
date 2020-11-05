
import { ThemeProvider } from 'styled-components'
import { Reset, Screen } from '@raid/kit'

import { theme } from '@itdd/theme'

if (process.env.DEBUG) {
  window.theme = theme
}

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Screen>
      {children}
    </Screen>
  </ThemeProvider>
)
