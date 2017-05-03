
import {Navigator} from 'raid-navigator'

import {signal, connect} from 'core/store'

export const Navigation = connect(
  state => ({
    navigation: state.navigation,
    signal
  }),
  Navigator
)
