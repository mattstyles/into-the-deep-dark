
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'components/navigator/link'

var SettingsView = props => {
  let items = [
    'One',
    'Two',
    'Three',
    'Four'
  ]
  return (
    <View>
      <Link route='/' title='Home'>Home</Link>
      <List items={items} />
    </View>
  )
}

SettingsView.title = 'Settings'

export default SettingsView
