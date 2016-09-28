
import View from 'components/view/view'
import {Link} from 'core/navigator/link'

var ConfigView = props => {
  return (
    <View>
      <Link route='/'>Home</Link>
      <Link route='/settings'>Settings</Link>
      <Link route='/page4'>Page 4</Link>
    </View>
  )
}

ConfigView.title = 'Configuration'

export default ConfigView
