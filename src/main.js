
import {render} from 'react-dom'

import {signal} from 'core/store'
import App from 'core/app'

// // import Counter from 'components/counter'
// import Tick, {TickUI} from 'components/tick'
// // import Resources from 'components/resources'
//
// import {Navigator} from 'core/navigator/navigator'
// import SettingsView from 'views/settings/settings'
// import HomeView from 'views/home/home'
// import ConfigView from 'views/config/config'
// import Page4View from 'views/page4/page4'
// import Personnel from 'views/personnel/personnel'
//
// var previous = 0

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

const el = document.querySelector('.js-main')
const onErr = err => console.error(err)
const onRender = state => {
  console.log(state)
  render(<App />, el)
}

signal.observe(onRender, onErr)
