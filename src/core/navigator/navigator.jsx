
import {getChild} from './utils'

import {store} from 'signals/main'
import {reducer} from './reducer'
store.register(reducer)

import StackNavigator from './stackNavigator/stackNavigator'
import ViewNavigator from './viewNavigator/viewNavigator'
import NavTitle from './title'

export const Navigator = ({children, state}) => {
  let {stack, index} = state.nav
  let route = stack[index]
  let {base} = state
  const View = getChild(children, route.route)

  if (process.env.DEBUG) {
    console.log('Rendering navigation', `<${index}>`, stack)
  }

  let SubNav = View.tag.SubNav
    ? View.tag.SubNav({state, params: View.attrs.params})
    : null

  return (
    <div className='Main'>
      <nav className='Nav'>
        <StackNavigator stack={stack} currentIndex={index} />
        <NavTitle base={base} />
        <ViewNavigator />
      </nav>
      {SubNav}
      {View}
    </div>
  )
}
