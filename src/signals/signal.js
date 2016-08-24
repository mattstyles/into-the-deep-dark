
import most from 'most'
import EventEmitter from 'eventemitter3'

class Signal {
  constructor (initialState) {
    this.emitter = new EventEmitter()
    this.reducers = []

    this.source = most
      .fromEvent('action', this.emitter)
      .scan((state, event) => {
        return this.reducers.reduce((state, fn) => {
          return fn(state, event)
        }, state)
      }, initialState)
  }

  emit = (payload) => {
    if (typeof payload !== 'object') {
      throw new Error('Incorrect payload type, expects object')
    }

    this.emitter.emit('action', payload)
  }

  subscribe = (onAction, onError, onComplete) => {
    this.source.observe(
      onAction,
      onError,
      onComplete
    )
  }

  register = (reducer) => {
    this.reducers.push(reducer)
  }
}

export default Signal
