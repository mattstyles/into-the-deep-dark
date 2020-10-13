
// import raf from 'raf-stream'
import raf from 'raf'
import EventEmitter from 'eventemitter3'
import { fromEvent } from 'most'

// raf-stream collects all time since the last update when you resume, we want
// to reset the last time, it's easier to control raf directly ourselves and
// create our own class with an emitter.
const defaults = {
  rate: 1000 / 20,
  type: '@itdd/tick'
}

class Ticker {
  isRunning = true
  last = 0
  current = 0
  rate = defaults.rate
  type = defaults.type

  constructor (options) {
    const opts = { ...defaults, ...options }
    this.events = new EventEmitter()
    this.rate = opts.rate
    this.type = opts.type

    raf(this.onTick)
  }

  pause () {
    this.isRunning = false
  }

  resume () {
    this.isRunning = true
    this.last = 0
    raf(this.onTick)
  }

  createStream () {
    return fromEvent(this.type, this.events)
      .map(dt => {
        return {
          type: this.type,
          payload: {
            dt
          }
        }
      })
  }

  onTick = (ts) => {
    if (this.last > 0) {
      this.current = this.current + (ts - this.last)

      if (this.current > this.rate) {
        this.events.emit(this.type, this.current)
        this.current = 0
      }
    }

    this.last = ts

    if (this.isRunning) {
      raf(this.onTick)
    }
  }
}

export const createTick = (options) => {
  const { rate, type } = { ...defaults, ...options }

  return new Ticker({
    rate,
    type
  })
}

// export const createTick = (options) => {
//   const { rate, type } = { ...defaults, ...options }
//   const collector = new EventEmitter()
//   const tick = raf()
//   let current = 0
//   let variableRate = rate
//   tick.on('data', (dt) => {
//     current = current + dt
//     if (current > variableRate) {
//       collector.emit('tick', current)
//       current = 0
//     }
//   })
//
//   const stream = fromEvent('tick', collector)
//     .map(dt => {
//       return {
//         type,
//         payload: {
//           dt
//         }
//       }
//     })
//
//   return {
//     pause: () => {
//       tick.pause()
//     },
//     resume: () => {
//       tick.resume()
//     },
//     setRate: (rate) => {
//       variableRate = rate
//     },
//
//     stream
//   }
// }
