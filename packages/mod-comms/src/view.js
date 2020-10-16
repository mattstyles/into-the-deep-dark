
/**
 * Ooo, interesting. Ramda is exported here but, Parcel knows that it is
 * also a part of lazyComponent and hoists it to main, i.e. it'll load it
 * upfront and not add weight to each individual lazy import.
 */

import { View, H1 } from '@raid/kit'
import { Loading } from '@itdd/components'

import { Link, routes } from '@itdd/router'

export const CommsView = () => {
  return (
    <View>
      <H1>Comms</H1>
      <Link route={routes.home}>Home</Link>
      <Loading />
    </View>
  )
}
