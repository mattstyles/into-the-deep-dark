
import classnames from 'classnames'

import {push} from './actions'
import {getChild} from './utils'

import {store} from 'signals/main'
import {reducer} from './reducer'
store.register(reducer)

import StackNavigator from './stackNavigator/stackNavigator'
import NavTitle from './title'

const RightNav = () => {
  let classes = classnames({
    'Btn': true,
    'Btn--isNav': true
  })

  // Should probably use a link here but its a good example of programmatically
  // calling a route update.
  return (
    <div className='Nav-right'>
      <button
        className={classes}
        onClick={e => push({
          route: '/settings',
          state: {
            title: undefined
          }
        })}
      >Settings</button>
    </div>
  )
}

export const Navigator = ({children, state}) => {
  let {stack, index} = state.nav
  let route = stack[index]
  let {base} = state
  const View = getChild(children, route.route)

  if (process.env.DEBUG) {
    console.log('Rendering navigation', `<${index}>`, stack)
  }

  return (
    <div className='Main'>
      <nav className='Nav'>
        <StackNavigator stack={stack} currentIndex={index} />
        <NavTitle base={base} />
        <RightNav />
      </nav>
      {View}
    </div>
  )
}
