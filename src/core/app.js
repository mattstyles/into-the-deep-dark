
import {Helmet} from 'react-helmet'

import {connect} from 'core/store'
import Router from 'core/router'
import {white, black} from 'core/styles/modules/colors'
import {baseSize, fonts} from 'core/styles/modules/fonts'

import {View} from 'components'

// const App = ({state}) => (
//   <div className='Main'>
//     <TickUI rate={previous}>
//       <Tick disabled />
//     </TickUI>
//     <Navigator state={state}>
//       <HomeView route='/' title='Home' />
//       <SettingsView route='/settings' title='Settings' />
//       <ConfigView route='/config' title='Configuration' />
//       <Page4View route='/page4' title='Page 4' />
//       <Personnel route='/personnel' state={state} />
//     </Navigator>
//   </div>
// )

const App = ({state}) => (
  <View main>
    <Helmet>
      <meta charset='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1,user-scalable=0' />
      <title>Into the Deep Dark</title>
    </Helmet>
    <Router />
    <h1>Hello World</h1>
    <pre>{JSON.stringify(state, null, '  ')}</pre>
    <style jsx global>{`
      html, body {
        position: relative;
        width: 100vw;
        height: 100vh;
      }
      body {
        display: flex;
        margin: 0;
        font-family: ${fonts.main}, ${fonts.fallback.join(', ')};
        font-size: ${baseSize}px;
        color: ${white[1]};
        background: ${black[1]};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .Main {
        display: flex;
        flex: 1;
        flex-direction: column;
      }
    `}</style>
  </View>
)

export default connect(
  state => ({state}),
  App
)
