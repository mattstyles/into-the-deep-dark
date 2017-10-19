
import {theme, Icon} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

const vars = {
  width: 4.4
}

const Navigate = ({
  route,
  icon
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
      width={vars.width * 0.5}
      height={vars.width * 0.5}
      from={get}
    />
    <style jsx>{`
      a {
        text-decoration: none;
        transition: background ${theme.transition.main}ms;
      }
    `}</style>
  </a>
)
Navigate.defaultProps = {
  route: ''
}

const SideNav = () => (
  <nav>
    <Navigate icon='VIEW_EXPLORE' route='/settings' />
    <style jsx>{`
      nav {
        width: ${vars.width}rem;
        background: 'rgb(10, 12, 18)';
      }
    `}</style>
  </nav>
)

export default SideNav
