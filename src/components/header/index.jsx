
import StackNavigator from 'core/navigators/stackNavigator'

import {black} from 'core/styles/modules/colors'
import {headerHeight} from 'core/styles/theme'

const Header = () => (
  <header>
    <StackNavigator />
    <style jsx>{`
      header {
        display: flex;
        flex-direction: row;
        background: ${black[2]};
        height: ${headerHeight}px;
      }
    `}</style>
  </header>
)

export default Header
