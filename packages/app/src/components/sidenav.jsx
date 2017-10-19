
import oc from 'open-color'
import {theme, Icon, Text} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

const styling = {
  width: 4.4,
  background: 'rgb(27, 31, 34)',
  backgroundHover: oc.gray[9],
  iconSize: 2.2,
  itemHeight: 3.6
}

const Navigate = ({
  route,
  icon,
  option
}) => (
  <li>
    <a
      href={route}
      onClick={event => {
        event.preventDefault()
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
    `}</style>
  </li>
)
Navigate.defaultProps = {
  route: ''
}

const SideNav = () => (
  <nav>
    <ul>
      <Navigate icon='VIEW_PERSONNEL' route='/personnel' option='Personnel' />
      <Navigate icon='VIEW_COMMS' route='/comms' option='Comms' />
      <Navigate icon='VIEW_STOCK' route='/settings' option='Stock' />
      <Navigate icon='VIEW_ENGINEERING' route='/engineering' option='Engineering' />
      <Navigate icon='VIEW_EXPLORE' route='/' option='Exploration' />
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

export default SideNav
