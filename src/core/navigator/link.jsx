
import classnames from 'classnames'

import {push} from './actions'
import {def} from 'utils/component'

export const Link = def(({route, state, classes, children}) => {
  return (
    <a
      className={classnames('Link', classes)}
      href={route}
      onClick={event => {
        event.preventDefault()
        push({
          route,
          state
        })
      }}
    >
      {children}
    </a>
  )
}, {
  classes: '',
  state: {},
  route: '/',
  children: null
})
