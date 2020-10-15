
import { View, H1 } from '@raid/kit'
import { Link, routes } from '@itdd/router'

export const CommsView = () => {
  return (
    <View>
      <H1>Comms</H1>
      <Link route={routes.home}>Home</Link>
    </View>
  )
}
