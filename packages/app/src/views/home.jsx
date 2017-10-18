
import {View, H1} from '@idd/components'

import {connect} from 'signals'
import {Link, getCurrentPath} from 'core/navigation'

const HomeView = ({currentPath}) => (
  <View main>
    <H1>{`Home View: ${currentPath}`}</H1>
    <Link route='/settings'>Settings</Link>
  </View>
)

export default connect(
  getCurrentPath,
  HomeView
)
