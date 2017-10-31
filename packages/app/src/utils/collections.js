
import {compose, slice, concat, findIndex} from 'lodash/fp'

const _replace = (predicate, replacer, data, composer) => {
  const index = findIndex(predicate, data)
  if (index < 0) {
    return data
  }
  const elem = data[index]
  return compose(
    concat(slice(0, index, data)),
    concat(replacer(elem)),
    slice(index + 1, data.length)
  )(data)
}

export const replace = (predicate, replacer, data) => {
  if (!data) {
    return data => _replace(predicate, replacer, data)
  }
  return _replace(predicate, replacer, data)
}
