
import {compose, prop} from 'lodash/fp'

import {getApp} from 'core/selectors'

export const getTickSpeed = compose(
  prop('tickSpeed'),
  getApp
)

export const getTickModifier = compose(
  prop('tickModifier'),
  getApp
)
