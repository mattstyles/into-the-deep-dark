
import classnames from 'classnames'
import createHistory from 'history/createBrowserHistory'

import {store} from 'signals/main'

const STACK_LENGTH = 9

const history = createHistory()

history.listen((location, action) => {
  if (action === 'PUSH') {
    // store.emit({
    //   type: NAV_ACTIONS.PUSH,
    //   route: location.pathname
    // })
    return
  }

  if (action === 'POP') {
    store.emit({
      type: NAV_ACTIONS.POP
    })
    return
  }
})

export const NAV_ACTIONS = {
  PUSH: 'navigator:push',
  POP: 'navigator:pop',
  REPLACE: 'navigator:replace'
}

export const reducer = (state, event) => {
  let {stack} = state.nav

  console.log(event, state)

  if (event.type === NAV_ACTIONS.PUSH) {
    let {pathname} = event.payload.pathname
    if (pathname === getLast(stack).pathname) {
      return state
    }

    stack.push(event.payload)

    if (stack.length > STACK_LENGTH) {
      stack.shift()
    }

    return state
  }

  if (event.type === NAV_ACTIONS.POP) {
    if (stack.length === 1) {
      return state
    }

    stack.pop()
    return state
  }

  return state
}

const getChild = (stack, id) => {
  console.log('finding', id)
  let route = stack.find(route => route.attrs.route === id)
  // console.log('found', id, route.attrs)
  return route
}

const getLast = stack => {
  return stack[stack.length - 1]
}

const onPush = event => {
  history.push(event.pathname)
  console.log('pushing', event)
  store.emit({
    type: NAV_ACTIONS.PUSH,
    payload: event
  })
}

const onPop = event => {
  history.goBack()
}

const LeftNav = ({stack}) => {
  let text = stack.length > 1
    ? 'Back'
    : ''
  let classes = classnames({
    'Btn': true,
    'Btn--isNav': true,
    'Btn--isHidden': text.length === 0
  })

  return (
    <div className='Nav-left'>
      <button
        className={classes}
        onClick={onPop}
      >{text}</button>
    </div>
  )
}

const RightNav = ({stack}) => {
  let classes = classnames({
    'Btn': true,
    'Btn--isNav': true
  })

  return (
    <div className='Nav-right'>
      <button
        className={classes}
        onClick={e => onPush({
          pathname: '/settings',
          title: 'Settings'
        })}
      >Settings</button>
    </div>
  )
}

export const Navigator = ({children, state}) => {
  let {stack} = state.nav
  let route = getLast(stack)
  const View = getChild(children, route.pathname)
  return (
    <div className='Main'>
      <nav className='Nav'>
        <LeftNav stack={stack} />
        <span className='Nav-Title'>{route.title}</span>
        <RightNav stack={stack} />
      </nav>
      {View}
    </div>
  )
}

export const Link = ({route, title, children}) => {
  return (
    <button
      className='Btn Btn--isLink'
      onClick={e => onPush({pathname: route, title})}
    >
      {children}
    </button>
  )
}

store.register(reducer)
