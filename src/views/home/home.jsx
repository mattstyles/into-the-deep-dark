
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'components/navigator/link'
import Icon from 'components/icon/icon'
import {uid} from 'utils/number'

let items = Array.from({length: 25}, () => uid())

const HomeView = props => {
  return (
    <View>
      <Link route='/settings'>Settings</Link>
      <Link route='/config'>Configuration</Link>
      <Link route='/page4'>Page 4</Link>
      <div style={{
        background: 'rgb(245,247,255)',
        padding: 16
      }}>
        <Icon classes='Icon--isInline' icon='LOADING' />
        <Icon classes='Icon--isInline' icon='CHECK' />
        <Icon classes='Icon--isInline' icon='ARROW' />
        <Icon classes='Icon--isInline' icon='TWITTER' />
      </div>
      <List items={items} />
    </View>
  )
}

HomeView.title = 'Index'

export default HomeView
