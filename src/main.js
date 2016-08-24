
import {render} from 'inferno-dom'

import {store} from 'stores/main'
import Counter from 'components/counter'

const App = props => (
  <div>
    <h1>It’s Dark</h1>
    <Counter value={props.state.counter} />
  </div>
)

store.subscribe(state => {
  console.log(state)

  render(
    <App state={state} />,
    document.querySelector('.js-main')
  )
})

store.register((state, event) => {
  if (event.type === 'add') {
    state.counter += 1
  }

  if (event.type === 'subtract') {
    state.counter -= 1
  }

  return state
})

window.store = store
