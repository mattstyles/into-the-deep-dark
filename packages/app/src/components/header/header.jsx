
import oc from 'open-color'

// import ScreenNavigation from './navigation'
import BrowserNavigation from 'components/navigation/BrowserNavigation'
import theme from 'components/navigation/theme'
import {TickControl} from 'components/tickControl'

const Header = () => (
  <header>
    <BrowserNavigation />
    <TickControl />
    {/* <ScreenNavigation height={theme.height} /> */}
    <style jsx>{`
      header {
        min-height: ${theme.height}rem;
        background: ${oc.gray[8]};
        display: flex;
        flex-direction: row;
      }
    `}</style>
  </header>
)

export default Header
