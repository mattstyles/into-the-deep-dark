
import {render} from 'inferno-dom'

import {store} from 'signals/main'
// import Counter from 'components/counter'
import Tick, {TickUI} from 'components/tick'
// import Resources from 'components/resources'

import {Navigator} from 'components/navigator/navigator'
import SettingsView from 'views/settings/settings'
import HomeView from 'views/home/home'

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
