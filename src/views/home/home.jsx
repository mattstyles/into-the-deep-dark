
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'components/navigator/link'
import {uid} from 'utils/number'

let items = Array.from({length: 25}, () => uid())

const HomeView = props => {
  return (
    <View>
      <Link route='/settings'>Settings</Link>
      <Link route='/config'>Configuration</Link>
      <List items={items} />
    </View>
  )
}

HomeView.title = 'Index'

export default HomeView
