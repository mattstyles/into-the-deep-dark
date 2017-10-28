
import oc from 'open-color'
import {View, H1, Button, Icon, Text, OptionList, NavOption} from '@idd/components'

import {connect} from 'signals'
import {Link, getCurrentPath} from 'core/navigation'
import actions from 'core/actions'
import getIcon from 'components/icons'

const {test, test1} = actions

const SettingsView = ({currentPath}) => (
  <View main>
    <div>
      <OptionList isHorizontal height={3.6}>
        <NavOption
          route='/settings'
          text='Settings'
        />
        <NavOption
          route='/404'
          text='404'
        />
      </OptionList>
      <style jsx>{`
        div {
          background: ${oc.gray[8]};
        }
        div :global(.Option) {
          text-transform: none;
          letter-spacing: 0;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
    <View isPadded>
      <H1>{`Home View: ${currentPath}`}</H1>
      <div style={{marginBottom: 20}}>
        <Text><Link route='/'>Home</Link></Text>
        <Text> more text</Text>
      </div>
      <Button onClick={event => test.of('test')}>Dispatch action test</Button>
      <Button onClick={event => test1.of('1')}>Dispatch action test1</Button>
      <Icon icon='VIEW_EXPLORE' from={getIcon} large />
      <Icon icon='VIEW_COMMS' from={getIcon} large />
      <Icon icon='VIEW_PERSONNEL' from={getIcon} large />
      <Icon icon='VIEW_ENGINEERING' from={getIcon} large />
      <Icon icon='VIEW_STOCK' from={getIcon} large />
    </View>
  </View>
)

export default connect(
  getCurrentPath,
  SettingsView
)
