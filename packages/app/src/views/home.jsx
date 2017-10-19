
import {View, H1, Button, Icon, Text} from '@idd/components'

import {connect} from 'signals'
import {Link, getCurrentPath} from 'core/navigation'
import actions from 'core/actions'
import getIcon from 'components/icons'

const {test, test1} = actions

const HomeView = ({currentPath}) => (
  <View main>
    <div style={{padding: 20}}>
      <H1>{`Home View: ${currentPath}`}</H1>
      <div style={{marginBottom: 20}}>
        <Text><Link route='/settings'>Settings</Link></Text>
        <Text> more text</Text>
      </div>
      <Button onClick={event => test.of('test')}>Dispatch action test</Button>
      <Button onClick={event => test1.of('1')}>Dispatch action test1</Button>
      <Icon icon='VIEW_EXPLORE' from={getIcon} />
    </div>
  </View>
)

export default connect(
  getCurrentPath,
  HomeView
)
