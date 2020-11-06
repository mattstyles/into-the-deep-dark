
import { ThemeProvider } from 'styled-components'
import { Reset } from '@raid/kit'

import { theme } from '@itdd/theme'

import { Page } from './page'

if (process.env.DEBUG) {
  window.theme = theme
}

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    <Page>
      {children}
    </Page>
  </ThemeProvider>
)
