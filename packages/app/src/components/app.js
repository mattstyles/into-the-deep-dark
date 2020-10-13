
import { ThemeProvider } from 'styled-components'
import { Reset, extend } from '@raid/kit'

const theme = extend()({})

export const App = ({ state, children }) => (
  <ThemeProvider theme={theme}>
    <Reset />
    {children}
  </ThemeProvider>
)
