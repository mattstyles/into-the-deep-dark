
import { ThemeProvider } from 'styled-components'
import { Reset } from '@raid/kit'

import { theme } from './theme'

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    {children}
  </ThemeProvider>
)
