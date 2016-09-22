
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
        background: 'rgb(245,247,255)'
      }}>
        <Icon icon='LOADING' />
        <Icon icon='CHECK' />
        <Icon icon='FACEBOOK' />
        <Icon icon='TWITTER' />
      </div>
      <List items={items} />
    </View>
  )
}

HomeView.title = 'Index'

export default HomeView
