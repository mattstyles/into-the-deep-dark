
import tape from 'tape'
import {isEqual, isArray} from 'lodash'

import {replace} from 'utils/collections'

const identity = _ => _
const findNumber = num => _ => _ === num
const convert = any => _ => any

tape('Should return a curried function if lacking data', t => {
  t.plan(2)

  t.equal(typeof replace(identity, identity), 'function', 'returns a function')
  t.ok(isArray(replace(identity, identity, [1, 2, 3])), 'performs the replace')
})

tape('Should return a new array', t => {
  t.plan(1)
  const repl = replace(findNumber(0), convert('foo'))
  const data = [0, 1, 2]
  repl(data)
  t.ok(isEqual(
    data,
    [0, 1, 2]
  ), 'data is unmodified')
})

tape('Should replace based on a predicate function', t => {
  t.plan(3)

  const data = [0, 1, 2, 4]

  t.ok(isEqual(
    replace(findNumber(0), convert('foo'), data),
    ['foo', 1, 2, 4]
  ), 'Replaces at the start')
  t.ok(isEqual(
    replace(findNumber(2), convert('foo'), data),
    [0, 1, 'foo', 4]
  ), 'Replaces in the middle')
  t.ok(isEqual(
    replace(findNumber(4), convert('foo'), data),
    [0, 1, 2, 'foo']
  ), 'Replaces at the end')
})
