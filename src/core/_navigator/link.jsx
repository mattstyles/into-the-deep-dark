
import classnames from 'classnames'

import {push} from './actions'
import {def} from 'utils/component'

export const Link = def(({route, state, classes, children, preClick,
  onUnhover, onHover}) => {
  return (
    <a
      className={classnames('Link', classes)}
      href={route}
      onClick={event => {
        event.preventDefault()
        if (!preClick || typeof preClick !== 'function') {
          push({route, state})
          return
        }

        let promise = preClick({route, state})
        // Don't check for specific promises, a dirty promise is good enough
        if (promise && promise.then) {
          promise.then(res => push({route, state}))
          return
        }

        push({route, state})
      }}
      onMouseLeave={onUnhover}
      onMouseEnter={onHover}
    >
      {children}
    </a>
  )
}, {
  classes: '',
  state: {},
  route: '/',
  children: null,
  preClick: null
})
