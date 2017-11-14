
import {createStructuredSelector} from 'reselect'
import {View, H1, P} from '@idd/components'

import {connect} from 'signals'
import {getCurrentPath} from 'core/navigation'
import {CommsNav} from 'views/comms'

const DiplomacyView = ({currentPath}) => (
  <View main>
    <CommsNav currentPath={currentPath} />
    <View isPadded>
      <H1>Diplomacy view</H1>
      <P>{currentPath}</P>
    </View>
  </View>
)

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath
  }),
  DiplomacyView
)
