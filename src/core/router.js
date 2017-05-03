
import {Navigation} from 'core/navigator'
import {View} from 'components'

const Router = () => (
  <Navigation>
    <View route='/'>
      <h1>Hello World</h1>
    </View>
    <View route='/foo'>
      <h1>Hello Foo</h1>
    </View>
  </Navigation>
)

export default Router
