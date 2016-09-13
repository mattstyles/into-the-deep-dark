
import {store} from 'signals/main'

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  POP: 'navigator:pop',
  REPLACE: 'navigator:replace'
}

export const reducer = (state, event) => {
  if (event.type === NAV_ACTIONS.PUSH) {
    state.nav.route = event.route
    state.nav.stack.push(event.route)
    return state
  }
  return state
}

const getChild = (stack, id) => {
  let route = stack.find(route => route.attrs.route === id)
  return route
}

const onPush = event => {
  store.emit({
    type: NAV_ACTIONS.PUSH,
    route: '/b'
  })
}

export const Navigator = ({children, state}) => {
  const View = getChild(children, state.nav.stack[state.nav.stack.length - 1])
  return (
    <div>
      <button className='Btn' onClick={onPush}>Push</button>
      {View}
    </div>
  )
}

store.register(reducer)
