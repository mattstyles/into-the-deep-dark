
import theme from './theme'
import oc from 'open-color'

const App = ({children, styles}) => (
  <div className='app' style={styles}>
    {children}
    <style jsx>{`
      .app {
        display: flex;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
      }
    `}</style>
    <style jsx global>{`
      html {
        font-size: 10px;
      }
      body {
        margin: 0;
        background: ${oc.gray[0]};
        color: ${oc.gray[7]};
        font-family: ${theme.fonts.main};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
      }
      html.isIosSafari,
      .isIosSafari body {
        /* Required to fix ios safari menu bar */
        position: fixed;
      }
    `}</style>
  </div>
)

export default App
