
import classnames from 'classnames'

import {View} from 'components/view/view'
import {Link} from 'core/navigator/link'

const PersonnelView = ({state}) => {
  return (
    <View main>
      <div className='PageNav'>
        <Link route='/settings'>Settings</Link>
        <Link route='/config'>Configuration</Link>
        <Link route='/page4'>Page 4</Link>
      </div>
      <View scroll>
        <h1>Personnel View</h1>
      </View>
    </View>
  )
}

PersonnelView.title = 'Personnel'
PersonnelView.SubNav = ({state, params}) => {
  return (
    <div className='SubNav'>
      <Link
        route='/personnel/all'
        classes={classnames({'SubNav--isActive': getActive('all', params.subview)})}
      >All</Link>
      <Link
        route='/personnel/officers'
        classes={classnames({'SubNav--isActive': getActive('officers', params.subview)})}
      >Officers</Link>
      <Link
        route='/personnel/inhabitants'
        classes={classnames({'SubNav--isActive': getActive('inhabitants', params.subview)})}
      >Inhabitants</Link>
      <Link
        route='/personnel/visitors'
        classes={classnames({'SubNav--isActive': getActive('visitors', params.subview)})}
      >Visitors</Link>
    </div>
  )
}

const getActive = (key, current) => {
  return key === current
}

export default PersonnelView
