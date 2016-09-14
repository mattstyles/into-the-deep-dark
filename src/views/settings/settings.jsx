
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'components/navigator/navigator'

const SettingsView = props => {
  let items = [
    'One',
    'Two',
    'Three',
    'Four'
  ]
  return (
    <View>
      <Link route='/'>Home</Link>
      <List items={items} />
    </View>
  )
}

export default SettingsView
