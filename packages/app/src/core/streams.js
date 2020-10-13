
import raf from 'raf-stream'
import EventEmitter from 'eventemitter3'
import { fromEvent } from 'most'

const defaults = {
  rate: 1000 / 20,
  type: '@itdd/tick'
}

export const createTick = (options) => {
  const { rate, type } = { ...defaults, ...options }
  const tick = new EventEmitter()
  let current = 0
  raf().on('data', (dt) => {
    current = current + dt
    if (current > rate) {
      tick.emit('tick', current)
      current = 0
    }
  })

  return fromEvent('tick', tick)
    .map(dt => {
      return {
        type,
        payload: {
          dt
        }
      }
    })
}
