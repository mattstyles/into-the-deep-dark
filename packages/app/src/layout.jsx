
import {App, Pane} from '@idd/components'

import Router from './router'
import Navigation from 'components/navigation'
import SideNav from 'components/sidenav'

const Layout = () => (
  <App>
    <Pane split>
      <SideNav />
      <Pane>
        <Navigation />
        <Router />
      </Pane>
    </Pane>
  </App>
)

export default Layout
