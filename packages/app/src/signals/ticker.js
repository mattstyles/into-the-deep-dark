
import {createAction} from 'raid-fl'

import raf from './rafstream'
import {app} from 'core/constants'

export const countToConsume = max => (acc, v) => {
  while (acc > max) {
    acc = acc - max
  }
  return acc + v
}

export const countToGraceful = max => (acc, v) => {
  if (acc > max) {
    acc = acc - max
  }

  return acc + v
}

const defaultOpts = {
  el: typeof window === 'undefined' ? null : window,
  rate: 100,
  consume: true
}

export class Tick {
  static of (opts) {
    return new Tick(opts)
  }

  static action = createAction('@@tick/tock')

  countToRate = (acc, v) => {
    if (this.opts.consume) {
      while (acc > this.opts.rate) {
        acc = acc - this.opts.rate
      }
      return acc + v
    }

    if (acc > this.opts.rate) {
      acc = acc - this.opts.rate
    }
    return acc + v
  }

  constructor (opts) {
    this.opts = {...defaultOpts, ...opts}

    this.raf = raf(this.opts.el)
    this.stream = this.generateStream()
  }

  generateStream () {
    return this.raf
      .scan(this.countToRate, 0)
      .filter(dt => dt > this.opts.rate)
      .map(Tick.action.of)
  }

  attach () {
    return this.stream
  }

  pause () {
    this.raf.pause()
  }

  resume () {
    this.raf.resume()
  }

  setRate (rate) {
    this.opts.rate = rate
  }
}

export default Tick.of({
  // 8 updates per second
  rate: app.baseTickSpeed,
  // If the window is unfocussed the elapsed time will accrue, this setting
  // spits it out in one go
  consume: true
})
