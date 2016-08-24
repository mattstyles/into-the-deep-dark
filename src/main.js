
import {render} from 'inferno-dom'

import {store} from 'signals/main'
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

window.store = store
