
import {Navigation, Link} from 'core/navigator'
import {View} from 'components'

const Router = () => (
  <Navigation>
    <View route='/'>
      <h1>Hello World</h1>
      <Link route='/foo'>Foo</Link>
    </View>
    <View route='/foo'>
      <h1>Hello Foo</h1>
      <Link route='/'>Home</Link>
    </View>
  </Navigation>
)

export default Router
