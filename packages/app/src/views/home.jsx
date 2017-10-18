
import {View, H1, Button, Icon} from '@idd/components'

import {connect} from 'signals'
import {Link, getCurrentPath} from 'core/navigation'
import actions from 'core/actions'
import getIcon from 'components/icons'

const {test, test1} = actions

const HomeView = ({currentPath}) => (
  <View main>
    <H1>{`Home View: ${currentPath}`}</H1>
    <div style={{marginBottom: 20}}>
      <Link route='/settings'>Settings</Link>
    </div>
    <Button onClick={event => test.of('test')}>Dispatch action test</Button>
    <Button onClick={event => test1.of('1')}>Dispatch action test1</Button>
    <Icon icon='VIEW_EXPLORE' from={getIcon} />
  </View>
)

export default connect(
  getCurrentPath,
  HomeView
)
