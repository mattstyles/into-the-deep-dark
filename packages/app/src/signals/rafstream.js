
import frame from 'raf'
import EventEmitter from 'eventemitter3'
import {fromEvent} from 'most'

const raf = (el) => {
  const ee = new EventEmitter()
  const stream = fromEvent('data', ee)
  stream.isPaused = false

  let last = 0

  stream.pause = () => {
    stream.isPaused = true
  }
  stream.resume = () => {
    last = 0
    stream.isPaused = false
    frame(iter, el)
  }

  frame(iter, el)

  return stream

  function iter (timestamp) {
    let dt = 0
    if (last > 0) {
      dt = timestamp - last
    }
    last = timestamp

    if (!stream.isPaused) {
      ee.emit('data', dt)
      frame(iter, el)
    }
  }
}

export default raf
