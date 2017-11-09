
import {Back, Forward} from 'core/navigation'

const BrowserNavigation = () => (
  <nav className='BrowserNavigation'>
    <Back />
    <Forward />
    <style jsx>{`
      nav {
        flex: 1
      }
    `}</style>
  </nav>
)

export default BrowserNavigation
