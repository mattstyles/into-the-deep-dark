
import {connect} from 'raid-fl'
import {zipObject} from 'lodash'

import {signal} from 'signals'

const createActions = connect(signal)

const actions = [
  'test',
  'test1'
]

export default zipObject(
  actions,
  createActions(actions)
)
