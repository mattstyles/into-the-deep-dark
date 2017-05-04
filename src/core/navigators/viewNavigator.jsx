
import {createSelector} from 'reselect'

import {connect} from 'core/store'
import {basepath} from 'utils/path'

const selector = createSelector(
  ({navigation: {stack, index}}) => ({stack, index}),
  ({stack, index}) => {
    const route = stack[index] || {}
    return {
      stack,
      index,
      route,
      path: basepath(route.pathname)
    }
  }
)

const ViewNavigator = ({route, path}) => (
  <div>
    <h1>View navigator</h1>
    <pre>{JSON.stringify(route, null, '  ')}</pre>
    <pre>{JSON.stringify(path, null, '  ')}</pre>
    <style jsx>{`

    `}</style>
  </div>
)

export default connect(
  selector,
  ViewNavigator
)
