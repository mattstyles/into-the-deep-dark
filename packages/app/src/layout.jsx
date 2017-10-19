
import {App} from '@idd/components'

import Router from './router'
import Header from 'components/header'

// const Layout = () => (
//   <App>
//     <Pane split>
//       <SideNav />
//       <Pane>
//         <Navigation />
//         <Router />
//       </Pane>
//     </Pane>
//   </App>
// )

const Layout = () => (
  <App>
    <Header />
    <Router />
  </App>
)

export default Layout
