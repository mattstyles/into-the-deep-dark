
import cx from 'classnames'
import {theme, Icon, Text} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

import {connect} from 'signals'
import {getCurrentRoute} from 'core/navigation'

const styling = {
  width: 4.4,
  background: 'rgb(27, 31, 34)',
  backgroundHover: 'rgba(255, 255, 255, 0.1)',
  backgroundSelected: 'rgba(0, 0, 0, 0.2)',
  iconSize: 2.2,
  itemHeight: 3.6
}

const Navigate = ({
  route,
  icon,
  option,
  pathname
}) => (
  <li className={cx({
    isSelected: pathname === route
  })}>
    <a
      href={route}
      onClick={event => {
        event.preventDefault()
        if (pathname === route) {
          return
        }
        push(route)
      }}
    >
      <Icon
        icon={icon}
        width={styling.iconSize}
        height={styling.iconSize}
        from={get}
        inline
      />
      <Text classes='Option'>{option}</Text>
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        transition: background ${theme.transition.main}ms;
        display: block;
        width: 100%;
      }
      a :global(i) {
        transform-origin: center;
        transform: scale(0.8);
        transition: transform ${theme.transition.main}ms;
        margin-left: ${theme.basePadding * 0.5}rem;
        margin-right: ${theme.basePadding * 0.5}rem;
      }
      a:hover :global(i) {
        transform-origin: center;
        transform: scale(1);
        transition: transform ${theme.transition.main}ms;
      }
      a :global(.Option) {
        line-height: ${styling.itemHeight}rem;
        margin-right: ${theme.basePadding * 4}rem;
        font-size: ${theme.baseFontSize * 0.85}rem;
        vertical-align: middle;
      }
      li {
        background: ${styling.background};
        transition: background ease-out ${theme.transition.main}ms;
      }
      li:hover {
        background: ${styling.backgroundHover};
      }
      li.isSelected {
        background: ${styling.backgroundSelected};
      }
    `}</style>
  </li>
)
Navigate.defaultProps = {
  route: ''
}

const SideNav = ({route: {pathname}}) => (
  <nav>
    <ul>
      <Navigate
        icon='VIEW_COMMS'
        route='/'
        option='Comms'
        pathname={pathname}
      />
      <Navigate
        icon='VIEW_STOCK'
        route='/settings'
        option='Stock'
        pathname={pathname}
      />
      <Navigate
        icon='VIEW_ENGINEERING'
        route='/engineering'
        option='Engineering'
        pathname={pathname}
      />
      <Navigate
        icon='VIEW_PERSONNEL'
        route='/personnel'
        option='Personnel'
        pathname={pathname}
      />
      <Navigate
        icon='VIEW_EXPLORE'
        route='/exploration'
        option='Exploration'
        pathname={pathname}
      />
    </ul>
    <style jsx>{`
      nav {
        background: ${styling.background};
        border-right: 2px solid rgba(0, 0, 0, 0.25);
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </nav>
)

export default connect(
  getCurrentRoute,
  SideNav
)
