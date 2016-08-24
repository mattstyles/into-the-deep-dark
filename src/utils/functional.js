
export const iteratorFold = (it, fn, initial) => {
  for (const value of it) {
    initial = fn(initial, value)
  }
  return initial
}
