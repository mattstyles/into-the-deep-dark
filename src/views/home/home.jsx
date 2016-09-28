
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'core/navigator/link'
import Icon from 'components/icon/icon'
import Button from 'components/button/button'
import {uid} from 'utils/number'

let items = Array.from({length: 25}, () => uid())

const HomeView = props => {
  return (
    <View>
      <div>
        <Link route='/settings'>Settings</Link>
        <Link route='/config'>Configuration</Link>
        <Link route='/page4'>Page 4</Link>
      </div>
      <div style={{marginBottom: 16, marginTop: 16}}>
        <span>Check out the </span><Link route='/config'>configuration</Link>
      </div>
      <div style={{
        background: 'rgb(245,247,255)',
        padding: 16
      }}>
        <Icon classes='Icon--isInline' icon='LOADING' />
        <Icon classes='Icon--isInline' icon='CHECK' />
        <Icon classes='Icon--isInline' icon='ARROW' />
        <Icon classes='Icon--isInline' icon='TWITTER' />
      </div>
      <Button
        small
        onPress={e => console.log('pressed')}>
        Small
      </Button>
      <Button>Medium</Button>
      <Button large>Large</Button>
      <Button icon='TWITTER' circle large />
      <Button icon='TWITTER' text='Icon Button' large circle />
      <Button icon='TWITTER' circle small />
      <Button icon='TWITTER' circle />
      <Button icon='TWITTER' />
      <List items={items} />
    </View>
  )
}

HomeView.title = 'Index'

export default HomeView
