
/**
 * @param {object} v - object to traverse
 * @param {string} _ - object path
 * @returns {any|null} returns the next part of the object
 */
const objectTraverse = (v, _) => {
  return v && v[_] ? v[_] : null
}

/**
 * @typedef Box
 * @property {function} unwrap - returns the value
 * @property {function} orElse - returns the supplied value unless the boxed value exists (not null, not undefined)
 */

/**
 * Returns an object that allows application of a default or unwrapping.
 * Evaluates eagerly :(.
 * Note that null becomes a non-answer, if we need to evaluate against
 * null then we need to change the typeof at 41 and also ensure that
 * objectTraverse spits out undefined when the path can not be followed.
 * @param {string} path - the path through the object to the value
 * @returns {function}
 */
export const get = path => {
  const parts = path.split('.')

  /**
   * get is curried
   * @param {object} obj - the object to traverse
   * @returns {}
   */
  return obj => {
    const value = parts.reduce(objectTraverse, obj)

    /**
     * @returns {Box}
     */
    return {
      unwrap: () => value,
      orElse: _ => typeof value === 'undefined' || value === null
        ? _
        : value
    }
  }
}

/**
 * Allows consumers to patch a partial path on to supply as a selector function
 * @example patchSelector('updateTick')('isRunning', false)(state)
 * const patch = patchSelector('updateTick')
 * const selector = patch('isRunning', false)
 * @param {string} partial - partial path of object traversal
 * @returns {function}
 */
export const patchSelector = partial => {
  /**
   * @param {string} path - concatenated to the partial path
   * @param {any} _ - default value to return
   * @returns {function}
   */
  return (path, _) => {
    const traverse = get(`${partial}.${path}`)

    /**
     * @param {object} state - the state object to traverse
     */
    return state => {
      return traverse(state).orElse(_)
    }
  }
}
