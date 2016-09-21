
import classnames from 'classnames'

import {tail} from 'utils/functional'
import {onPush, onPop} from './actions'
import {getChild} from './utils'

import {store} from 'signals/main'
import {reducer} from './reducer'
store.register(reducer)

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
          route: '/settings',
          state: {
            title: 'Settings'
          }
        })}
      >Settings</button>
    </div>
  )
}

const NavTitle = ({text}) => {
  return <span className='Nav-Title'>{text}</span>
}

export const Navigator = ({children, state}) => {
  let {stack} = state.nav
  let route = tail(stack)
  const View = getChild(children, route.route)
  console.log('--> Navigation Render')
  console.log('view', View.attrs)
  console.log('route', route)
  console.log('<-- Navigation Render')
  return (
    <div className='Main'>
      <nav className='Nav'>
        <LeftNav stack={stack} />
        <NavTitle text={route.state.title || View.attrs.title} />
        <RightNav stack={stack} />
      </nav>
      {View}
    </div>
  )
}
