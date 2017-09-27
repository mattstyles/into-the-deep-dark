
import cx from 'classnames'
import {Navigator, push} from 'raid-navigator'

import {signal, connect} from 'core/store'

export const Navigation = connect(
  state => ({
    navigation: state.navigation,
    signal
  }),
  Navigator
)

export const Link = ({
  children,
  route,
  state,
  classes,
  onClick,
  onMouseEnter,
  onMouseLeave
}) => (
  <a
    className={cx(classes)}
    onClick={event => {
      event.preventDefault()
      push(route, state)
      onClick(event)
    }}
    href={route}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
  >
    {children}
  </a>
)

Link.defaultProps = {
  onClick: () => {}
}
