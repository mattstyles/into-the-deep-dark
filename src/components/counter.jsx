
import {store} from 'stores/main'

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
