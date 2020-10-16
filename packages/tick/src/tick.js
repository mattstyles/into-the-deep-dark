
import { Ticker } from './ticker'
import { actions } from './actions'

export const updateTick = new Ticker({
  rate: 1000 / 8,
  type: actions.tick
})
