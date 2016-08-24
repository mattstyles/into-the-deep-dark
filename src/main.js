
import {render} from 'inferno-dom'

import {store} from 'signals/main'
import Counter from 'components/counter'

const App = props => (
  <div>
    <h1>It’s Dark</h1>
    <Counter value={props.state.counter} />
  </div>
)

window.START = window.performance.now()

store.subscribe(state => {
  console.log(state)
  console.log('state time', (window.performance.now() - window.START).toFixed(2), 'ms')

  render(
    <App state={state} />,
    document.querySelector('.js-main')
  )

  console.log('render time', (window.performance.now() - window.START).toFixed(2), 'ms')
})

window.store = store
