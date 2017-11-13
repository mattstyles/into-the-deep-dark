
import {connect} from 'raid-fl/compat'
import {zipObject} from 'lodash'

import {signal} from 'signals'

const createActions = connect(signal)

const actions = [
  'select',
  'create',
  'delete'
]

export default zipObject(
  actions,
  createActions(actions)
)
