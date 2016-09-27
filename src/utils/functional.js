
/**
 * A fold function for iterator values
 * @returns <any> the result of folding the iterator values
 * @param it <Map> passes values to the supplied reducer
 * @param fn <Function> scan/reduce/fold, the callback working on the list
 * @param initial <any> _optional_ if omitted null will be passed to the first
 * callback
 */
export const iteratorFold = (it, fn, initial) => {
  for (const value of it) {
    initial = fn(initial, value)
  }
  return initial
}

/**
 * Returns a new array containing the top `n` items of the array
 * @returns <Array<any>>
 * @param num <Integer> _optional_ number of items to return
 * @param stack <Array<any>>
 */
export const head = (num, stack) => {
  if (typeof num !== 'number') {
    return head(0, num)
  }

  if (num <= 1) {
    return stack[0]
  }

  if (num >= stack.length) {
    return stack
  }

  return stack.slice(0, num)
}

/**
 * Returns a new array containing the last `n` items of the array
 * @returns <Array<any>>
 * @param num <Integer> _optional_ number of items to return
 * @param stack <Array<any>>
 */
export const tail = (num, stack) => {
  if (typeof num !== 'number') {
    return tail(0, num)
  }

  let last = stack.length - 1

  if (num <= 1) {
    return stack[last]
  }

  if (num >= stack.length) {
    return stack
  }

  return stack.slice(last - num, last)
}

/**
 * Noop
 */
export const noop = () => {}
