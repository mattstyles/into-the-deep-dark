
import {compose, head, split, replace} from 'lodash/fp'

/**
 * @param <String>
 * @returns <String>
 * @example /foo => foo
 * @example /foo/bar => foo
 */
export const basepath = compose(
  head,
  split('/'),
  replace(/^\//, '')
)
