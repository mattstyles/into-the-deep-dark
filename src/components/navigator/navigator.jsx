
import classnames from 'classnames'
import createHistory from 'history/createBrowserHistory'

import {store} from 'signals/main'

const history = createHistory()
window.h = history

history.listen((location, action) => {
  if (action === 'PUSH') {
    store.emit({
      type: NAV_ACTIONS.PUSH,
      route: location.pathname
    })
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
  let {stack, route} = state.nav

  if (event.type === NAV_ACTIONS.PUSH) {
    route = event.route
    stack.push(route)
    return state
  }

  if (event.type === NAV_ACTIONS.POP) {
    if (stack.length === 1) {
      return state
    }

    stack.pop()
    route = getLast(stack)
    return state
  }

  return state
}

const getChild = (stack, id) => {
  let route = stack.find(route => route.attrs.route === id)
  return route
}

const getLast = stack => {
  return stack[stack.length - 1]
}

const onPush = event => {
  // store.emit({
  //   type: NAV_ACTIONS.PUSH,
  //   route: '/b'
  // })
  history.push('/b')
}

const onPop = event => {
  // store.emit({
  //   type: NAV_ACTIONS.POP
  // })
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
  let text = stack.length > 1
    ? ''
    : 'Next'
  let classes = classnames({
    'Btn': true,
    'Btn--isNav': true,
    'Btn--isHidden': text.length === 0
  })

  return (
    <div className='Nav-right'>
      <button
        className={classes}
        onClick={onPush}
      >{text}</button>
    </div>
  )
}

export const Navigator = ({children, state}) => {
  let {stack, title} = state.nav
  const View = getChild(children, getLast(stack))
  return (
    <div className='Main'>
      <nav className='Nav'>
        <LeftNav stack={stack} />
        <span className='Nav-Title'>{title}</span>
        <RightNav stack={stack} />
      </nav>
      <button
        className='Btn'
        onClick={stack.length === 1
            ? onPush
            : onPop}>
        {stack.length === 1
          ? 'Push'
          : 'Pop'}
      </button>
      {View}
    </div>
  )
}

store.register(reducer)
