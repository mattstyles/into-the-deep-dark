
import oc from 'open-color'

import {Back, Forward} from 'core/navigation'
import ScreenNavigation from './navigation'

export const theme = {
  height: 5.4,
  padding: 0.8,
  linkPadding: 1.4
}

const Header = () => (
  <header>
    <nav className='BrowserNavigation'>
      <Back />
      <Forward />
    </nav>
    <ScreenNavigation height={theme.height} />
    <style jsx>{`
      header {
        min-height: ${theme.height}rem;
        background: ${oc.gray[8]};
        display: flex;
        flex-direction: row;
      }
      nav {
        flex: 1;
      }
    `}</style>
  </header>
)

export default Header
