
import classnames from 'classnames'

import {View} from 'components/view/view'
import {Link} from 'core/navigator/link'

/**
 * Filter constants
 */
const FILTERS = {
  ALL: 0,
  OFFICERS: 1,
  INHABITANTS: 2,
  VISITORS: 3
}

/**
 * Grabs the current filter, if available, from the app state.
 * Defaults to 'all'
 */
const getFilter = nav => {
  return nav.stack[nav.index].state.filter || FILTERS.ALL
}

/**
 * Generate links for the subnav
 */
const generateLink = (text, filter, currentFilter) => {
  return (
    <Link
      route='/personnel'
      state={{filter}}
      classes={classnames({
        'SubNav--isActive': filter === currentFilter
      })}
    >{text}</Link>
  )
}

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
  const {nav} = state
  let filter = getFilter(nav)

  return (
    <div className='SubNav'>
      {generateLink('All', FILTERS.ALL, filter)}
      {generateLink('Officers', FILTERS.OFFICERS, filter)}
      {generateLink('Inhabitants', FILTERS.INHABITANTS, filter)}
      {generateLink('Visitors', FILTERS.VISITORS, filter)}
    </div>
  )
}

export default PersonnelView
