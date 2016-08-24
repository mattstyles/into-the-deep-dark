
import {store} from 'signals/main'
import {reducer, ACTIONS} from 'actions/counter'

store.register(reducer)

const onAdd = event => {
  store.emit({
    type: ACTIONS.ADD
  })
}

const onSubtract = event => {
  store.emit({
    type: ACTIONS.SUBTRACT
  })
}

const Counter = props => {
  return (
    <div className='Counter'>
      <div>{props.value}</div>
      <button onClick={onAdd}>Add</button>
      <button onClick={onSubtract}>Subtract</button>
    </div>
  )
}

export default Counter
