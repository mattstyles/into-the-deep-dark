
import { View, Stack } from '@raid/kit'

import { Link, routes } from '@itdd/router'

export default ({
  sx
}) => {
  return (
    <View as='aside' sx={sx}>
      <Stack>
        <Link route={routes.home}>Home</Link>
        <Link route={routes.test}>Test</Link>
        <Link route={routes.comms}>Comms</Link>
      </Stack>
    </View>
  )
}
