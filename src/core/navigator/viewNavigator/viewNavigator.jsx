
import classnames from 'classnames'

import Icon from 'components/icon/icon'
import {Link} from '../link'

const ViewNavigator = () => {
  return (
    <div className='NavView'>
      <Link route='/'>
        <Icon icon='VIEW_PERSONNEL' />
      </Link>
      <Link route='/'>
        <Icon icon='VIEW_COMMS' />
      </Link>
      <Link route='/'>
        <Icon icon='VIEW_STOCK' />
      </Link>
      <Link route='/'>
        <Icon icon='VIEW_ENGINEERING' />
      </Link>
      <Link route='/'>
        <Icon icon='VIEW_EXPLORE' />
      </Link>
    </div>
  )
}

export default ViewNavigator
