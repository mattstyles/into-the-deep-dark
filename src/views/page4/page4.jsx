
import View from 'components/view/view'
import {Link} from 'core/navigator/link'

var Page4View = props => {
  return (
    <View>
      <Link route='/'>Home</Link>
      <Link route='/settings'>Settings</Link>
      <Link route='/config'>Configuration</Link>
    </View>
  )
}

Page4View.title = 'Page 4'

export default Page4View
