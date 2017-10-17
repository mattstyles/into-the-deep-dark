
import theme from './theme'
import oc from 'open-color'

const App = ({children, styles}) => (
  <div style={styles}>
    {children}
    <style jsx global>{`
      html {
        font-size: 10px;
      }
      body {
        margin: 0;
        background: ${oc.gray[0]};
        color: ${oc.gray[7]};
        font-family: ${theme.fonts.main};
      }
    `}</style>
  </div>
)

export default App
