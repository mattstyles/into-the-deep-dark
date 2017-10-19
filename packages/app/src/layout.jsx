
import {App, Pane} from '@idd/components'

import Router from './router'
import Header from 'components/header'
import SideNav from 'components/sidenav'

const Layout = () => (
  <App>
    <Pane split>
      <SideNav />
      <Pane>
        <Header />
        <Router />
      </Pane>
    </Pane>
  </App>
)

// const Layout = () => (
//   <App>
//     <Header />
//     <Router />
//   </App>
// )

export default Layout
