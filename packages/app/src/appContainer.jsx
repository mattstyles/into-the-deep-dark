
import {Helmet} from 'react-helmet'
import {App, Pane} from '@idd/components'

import Router from './router'
import Header from 'components/header'
import SideNav from 'components/sidenav'

const AppContainer = () => (
  <App>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0' />
      <title>Into the Deep Dark</title>
      <link rel='stylesheet' type='text/css' href='https://cloud.typography.com/6111354/643726/css/fonts.css' />
    </Helmet>
    <Pane split>
      <SideNav />
      <Pane>
        <Header />
        <Router />
      </Pane>
    </Pane>
  </App>
)

export default AppContainer
