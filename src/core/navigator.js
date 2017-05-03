
import {Navigator, push} from 'raid-navigator'

import {signal, connect} from 'core/store'

export const Navigation = connect(
  state => ({
    navigation: state.navigation,
    signal
  }),
  Navigator
)

export const Link = ({children, route, state}) => (
  <a
    onClick={event => {
      event.preventDefault()
      push(route, state)
    }}
    href={route}
  >
    {children}
  </a>
)
