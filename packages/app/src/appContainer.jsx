
import {Helmet} from 'react-helmet'
import {App, Pane} from '@idd/components'

import Router from './router'
import Header from 'components/header/header'
import SideNav from 'components/navigation/sidenav'

// @TODO non-dynamic parts of the header should live in the html so they can
// be processed before the JS even tries to parse and fire in to life, for stuff
// like the font loading this will help to eliminate the fout, although a load
// state is likely in the end anyway so shouldn't be too much of an issue.
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
