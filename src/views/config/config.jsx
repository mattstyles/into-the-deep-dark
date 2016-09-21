
import List from 'components/list/list'
import View from 'components/view/view'
import {Link} from 'components/navigator/link'

var ConfigView = props => {
  return (
    <View>
      <Link route='/'>Home</Link>
      <Link route='/settings'>Settings</Link>
    </View>
  )
}

ConfigView.title = 'Configuration'

export default ConfigView
