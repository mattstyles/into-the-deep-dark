
import {connect} from 'raid-fl'
import {zipObject} from 'lodash'

import {signal} from 'signals'

const create = connect(signal)

export function createActions () {
  const actions = Array.from(arguments)
  return zipObject(
    actions,
    create(actions)
  )
}
