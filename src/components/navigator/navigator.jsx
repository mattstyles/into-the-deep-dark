
import classnames from 'classnames'

import {onGoBack, onGoForward, onPush} from './actions'
import {getChild} from './utils'

import {store} from 'signals/main'
import {reducer} from './reducer'
store.register(reducer)

const LeftNav = ({stack, currentIndex}) => {
  let common = ['Btn', 'Btn--isNav']
  let backClasses = classnames(common, {
    'Btn--isHidden': currentIndex === 0
  })

  let forwardClasses = classnames(common, {
    'Btn--isHidden': currentIndex === stack.length - 1
  })

  return (
    <div className='Nav-left'>
      <button
        className={backClasses}
        onClick={onGoBack}
      >{'<'}</button>
      <button
        className={forwardClasses}
        onClick={onGoForward}
      >{'>'}</button>
    </div>
  )
}

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
        onClick={e => onPush({
          route: '/settings',
          state: {
            title: undefined
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
  let {stack, index} = state.nav
  let route = stack[index]
  const View = getChild(children, route.route)
  console.log('--> Navigation Render')
  console.log('view', View.attrs)
  console.log('index', index, 'route', route)
  console.log(`  [${state.nav.index}, ${stack.length - 1}]`)
  console.log('<-- Navigation Render')

  return (
    <div className='Main'>
      <nav className='Nav'>
        <LeftNav stack={stack} currentIndex={index} />
        <NavTitle text={route.state.title || View.attrs.title} />
        <RightNav />
      </nav>
      {View}
    </div>
  )
}
