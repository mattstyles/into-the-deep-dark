
import {View} from '@idd/components'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'

const HomeView = ({currentPath}) => (
  <View main>
    <h1>Home {currentPath}</h1>
  </View>
)

export default connect(
  getCurrentPath,
  HomeView
)
