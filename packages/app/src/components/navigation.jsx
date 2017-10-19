
import oc from 'open-color'
import {theme, Icon} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

const styling = {
  padding: 0.6
}

const Navigate = ({
  route,
  icon,
  iconSize
}) => (
  <a
    href={route}
    onClick={event => {
      event.preventDefault()
      push(route)
    }}
  >
    <Icon
      icon={icon}
      width={iconSize}
      height={iconSize}
      from={get}
    />
    <style jsx>{`
      a {
        display: inline-block;
        text-decoration: none;
        transition: background ${theme.transition.main}ms;
        margin-left: ${styling.padding}rem;
      }
      a:first-of-type {
        margin-left: 0;
      }
      a :global(i) {
        transform-origin: center;
        transform: scale(0.8);
        transition: transform ${theme.transition.main}ms;
      }
      a :global(i:hover) {
        transform-origin: center;
        transform: scale(1);
        transition: transform ${theme.transition.main}ms;
      }
    `}</style>
  </a>
)
Navigate.defaultProps = {
  route: ''
}

const ScreenNavigation = ({height}) => {
  const iconSize = height - (styling.padding * 2)
  return (
    <nav>
      <Navigate icon='VIEW_PERSONNEL' route='/personnel' iconSize={iconSize} />
      <Navigate icon='VIEW_COMMS' route='/comms' iconSize={iconSize} />
      <Navigate icon='VIEW_STOCK' route='/settings' iconSize={iconSize} />
      <Navigate icon='VIEW_ENGINEERING' route='/engineering' iconSize={iconSize} />
      <Navigate icon='VIEW_EXPLORE' route='/' iconSize={iconSize} />
      <style jsx>{`
        nav {
          background: ${oc.gray[7]};
          height: ${height}rem;
          padding: ${styling.padding}rem;
          box-sizing: border-box;
        }
      `}</style>
    </nav>
  )
}

export default ScreenNavigation
