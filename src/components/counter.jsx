
import {store} from 'signals/main'
import counterAction from 'actions/counter'

store.register(counterAction)

const onAdd = event => {
  store.emit({
    type: 'add'
  })
}

const onSubtract = event => {
  store.emit({
    type: 'subtract'
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
