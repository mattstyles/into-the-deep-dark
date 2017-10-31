
import Benchmark from 'benchmark'

import {range, map, concat, slice, compose, findIndex} from 'lodash/fp'
import {replace} from '../src/utils/collections'

const suite = new Benchmark.Suite()

const data100 = range(0, 100)
const data10000 = range(0, 10000)
const dataM = range(0, 1000000)

const predicate = num => _ => _ === num
const replacer = str => _ => str

const replaceCompose = (predicate, replacer, data) => {
  const index = findIndex(predicate, data)
  const elem = data[index]
  return compose(
    concat(slice(0, index, data)),
    concat(replacer(elem)),
    slice(index + 1, data.length)
  )(data)
}

const replaceSpread = (predicate, replacer, data) => {
  const index = findIndex(predicate, data)
  const elem = data[index]
  return [
    ...slice(0, index, data),
    replacer(elem),
    ...slice(index + 1, data.length, data)
  ]
}

const replaceMap = (predicate, replacer, data) => {
  return data.map(item => {
    return predicate(item)
      ? replacer(item)
      : item
  })
}

const replaceLodashMap = (predicate, replacer, data) => {
  return map(item => {
    return predicate(item)
      ? replacer(item)
      : item
  }, data)
}

const replaceLodashMapPreload = (predicate, replacer) => {
  const mapper = map(item => {
    return predicate(item)
      ? replacer(item)
      : item
  })
  return data => mapper(data)
}
const replLDMapPreload = replaceLodashMapPreload(
  predicate(0),
  replacer('foo')
)

suite
  .add('Collections#replace#head 100 items', () => {
    replace(predicate(0), replacer('foo'), data100)
  })
  .add('Collections#replaceCompose#head 100 items', () => {
    replaceCompose(predicate(0), replacer('foo'), data100)
  })
  .add('Collections#replaceSpread#head 100 items', () => {
    replaceSpread(predicate(0), replacer('foo'), data100)
  })
  .add('Collections#replaceMap#head 100 items', () => {
    replaceMap(predicate(0), replacer('foo'), data100)
  })
  .add('Collections#replaceLodashMap#head 100 items', () => {
    replaceLodashMap(predicate(0), replacer('foo'), data100)
  })
  .add('Collections#replaceLodashMapPreload#head 100 items', () => {
    replLDMapPreload(data100)
  })

suite
  .add('Collections#replaceCompose#tail 100 items', () => {
    replaceCompose(predicate(data100.length - 1), replacer('foo'), data100)
  })
  .add('Collections#replaceSpread#tail 100 items', () => {
    replaceSpread(predicate(data100.length - 1), replacer('foo'), data100)
  })
  .add('Collections#replaceMap#tail 100 items', () => {
    replaceMap(predicate(data100.length - 1), replacer('foo'), data100)
  })
  .add('Collections#replace#tail 100 items', () => {
    replace(predicate(data100.length - 1), replacer('foo'), data100)
  })

suite
  .add('Collections#replaceCompose#head 10000 items', () => {
    replaceCompose(predicate(0), replacer('foo'), data10000)
  })
  .add('Collections#replaceSpread#head 10000 items', () => {
    replaceSpread(predicate(0), replacer('foo'), data10000)
  })
  .add('Collections#replaceMap#head 10000 items', () => {
    replaceMap(predicate(0), replacer('foo'), data10000)
  })
  .add('Collections#replace#head 10000 items', () => {
    replace(predicate(0), replacer('foo'), data10000)
  })

suite
  .add('Collections#replaceCompose#head 1M items', () => {
    replaceCompose(predicate(0), replacer('foo'), dataM)
  })
  .add('Collections#replaceSpread#head 1M items', () => {
    replaceSpread(predicate(0), replacer('foo'), dataM)
  })
  .add('Collections#replaceMap#head 1M items', () => {
    replaceMap(predicate(0), replacer('foo'), dataM)
  })
  .add('Collections#replace#head 1M items', () => {
    replace(predicate(0), replacer('foo'), dataM)
  })

suite
  .on('cycle', event => {
    console.log(`Cycle: ${event.target}`)
  })
  .on('complete', function () {
    const head = this.filter('fastest').map('name')
    console.log(`Fastest: ${head}`)
  })

suite.run()
