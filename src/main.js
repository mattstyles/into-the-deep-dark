
import {render} from 'inferno-dom'

import {store} from 'signals/main'
// import Counter from 'components/counter'
import Tick, {TickUI} from 'components/tick'
// import Resources from 'components/resources'

import {Navigator} from 'core/navigator/navigator'
import SettingsView from 'views/settings/settings'
import HomeView from 'views/home/home'
import ConfigView from 'views/config/config'
import Page4View from 'views/page4/page4'

var previous = 0

// const App = ({state}) => (
//   <div>
//     <h1>It’s Dark</h1>
//     <Counter value={state.counter} />
//     <Tick />
//     <Resources resources={state.resources} />
//     <UI rate={previous} />
//     <Navigator state={state}>
//       <div>Nav Child</div>
//     </Navigator>
//   </div>
// )

const App = ({state}) => (
  <div className='Main'>
    <TickUI rate={previous}>
      <Tick disabled />
    </TickUI>
    <Navigator state={state}>
      <HomeView route='/' title='Home' />
      <SettingsView route='/settings' title='Settings' />
      <ConfigView route='/config' title='Configuration' />
      <Page4View route='/page4' title='Page 4' />
    </Navigator>
  </div>
)

store.subscribe(state => {
  const START = window.performance.now()
  render(
    <App state={state} />,
    document.querySelector('.js-main')
  )

  previous = (window.performance.now() - START).toFixed(2)
})

window.store = store
