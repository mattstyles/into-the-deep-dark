
import {store} from 'signals/main'
import * as TICK_ACTIONS from 'actions/tick'

const ACTIONS = {
  INIT: 'resources:init',
  ADD: 'resources:add',
  COLLECT: 'resources:collect'
}

var resourceNames = [
  'Wood',
  'Ironwood',
  'Plasteel',
  'Carbonite',
  'Bacchus Crystals',
  'Ardite'
]

const reducer = (state, event) => {
  if (event.type === ACTIONS.INIT) {
    state.resources = []
    return state
  }

  if (event.type === ACTIONS.ADD) {
    state.resources.push(event.payload)
    return state
  }

  if (!state.resources || !state.resources.length) {
    return state
  }

  if (event.type === ACTIONS.COLLECT) {
    let res = state.resources.find(r => r.name === event.payload.name)
    if (!res || res.delay > 0) {
      return state
    }

    res.amount += 1
    res.delay = 20
    return state
  }

  if (event.type === TICK_ACTIONS.ACTIONS.TICK) {
    state.resources = state.resources.map(res => {
      if (res.delay === 0) {
        return res
      }
      res.delay -= 1
      return res
    })
    return state
  }

  return state
}

store.register(reducer)

const onCollect = name => {
  return event => {
    store.emit({
      type: ACTIONS.COLLECT,
      payload: {
        name: name
      }
    })
  }
}

const Resource = ({name, delay, amount}) => {
  let style = `width:${delay / 20 * 100}%`
  return (
    <div className='Resource' onClick={onCollect(name)}>
      <h2>{name} {amount}</h2>
      <span className='Resource-bar' style={style}></span>
    </div>
  )
}

const onMounted = node => {
  store.emit({
    type: ACTIONS.INIT
  })
}

const onAdd = event => {
  if (!resourceNames.length) {
    return
  }

  store.emit({
    type: ACTIONS.ADD,
    payload: {
      name: resourceNames.shift(),
      delay: 0,
      amount: 0
    }
  })
}

export default props => {
  let res = props.resources && props.resources.length
    ? props.resources.map(res => {
      return <Resource name={res.name} delay={res.delay} amount={res.amount} />
    })
    : null
  return (
    <div onAttached={onMounted}>
      <h1>Resources</h1>
      <button onClick={onAdd}>Add</button>
      {res}
    </div>
  )
}
