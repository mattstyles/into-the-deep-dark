
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
  console.log('subnav', state, params)
  return (
    <div className='SubNav'>
      <Link
        route='/personnel/all'
        className={classnames({'SubNav--isActive': getActive('all', params[0])})}
      >All</Link>
      <Link
        route='/personnel/officers'
        className={classnames({'SubNav--isActive': getActive('all', params[0])})}
      >Officers</Link>
      <Link
        route='/personnel/inhabitants'
        className={classnames({'SubNav--isActive': getActive('all', params[0])})}
      >Inhabitants</Link>
      <Link
        route='/personnel/all'
        className={classnames({'SubNav--isActive': getActive('all', params[0])})}
      >All</Link>
      <Link route='/personnel/officers'>Officers</Link>
      <Link route='/personnel/inhabitants'>Inhabitants</Link>
      <Link route='/personnel/visitors'>Visitors</Link>
    </div>
  )
}

const getActive = (key, current) => {
  return key === current
}

export default PersonnelView
