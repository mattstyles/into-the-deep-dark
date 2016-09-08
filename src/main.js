
import {render} from 'inferno-dom'

import {store} from 'signals/main'
import Counter from 'components/counter'
import Tick, {UI} from 'components/tick'
import Resources from 'components/resources'

var previous = 0

const App = props => (
  <div>
    <h1>It’s Dark</h1>
    <Counter value={props.state.counter} />
    <Tick />
    <Resources resources={props.state.resources} />
    <UI rate={previous} />
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
