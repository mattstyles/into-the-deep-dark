
import { View, H1 } from '@raid/kit'

import { Link, routes } from '@itdd/router'

export default () => {
  return (
    <View>
      <H1>Lazy Loaded</H1>
      <Link route={routes.home}>Home</Link>
    </View>
  )
}
