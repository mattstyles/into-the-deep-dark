
import {findIndex, map} from 'lodash/fp'

const _replaceMapper = (predicate, replacer) => map(item => {
  return predicate(item)
    ? replacer(item)
    : item
})
const _replace = (predicate, replacer, data, mapper) => {
  const index = findIndex(predicate, data)
  if (index < 0) {
    return data
  }
  mapper = mapper || _replaceMapper(predicate, replacer)
  return mapper(data)
}

export const replace = (predicate, replacer, data) => {
  if (!data) {
    const mapper = _replaceMapper(predicate, replacer)
    return data => _replace(predicate, replacer, data, mapper)
  }
  return _replace(predicate, replacer, data)
}
