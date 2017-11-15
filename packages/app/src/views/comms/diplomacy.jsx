
import {createStructuredSelector} from 'reselect'
import {View, H1, P} from '@idd/components'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'
import {Pure} from 'utils'

const DiplomacyView = ({currentPath}) => (
  <View isPadded>
    <H1>Diplomacy view</H1>
    <P>{currentPath}</P>
  </View>
)

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath
  }),
  Pure(DiplomacyView)
)
