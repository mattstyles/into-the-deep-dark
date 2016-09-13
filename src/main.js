
import {render} from 'inferno-dom'

import {store} from 'signals/main'
// import Counter from 'components/counter'
import Tick, {TickUI} from 'components/tick'
// import Resources from 'components/resources'

import {Navigator} from 'components/navigator/navigator'

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
  <div>
    <TickUI rate={previous}>
      <Tick />
    </TickUI>
    <Navigator state={state}>
      <div route='/'>Nav Child Route Index</div>
      <div route='/b'>Nav Child Route B</div>
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
