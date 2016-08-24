
export default (state, event) => {
  if (event.type === 'add') {
    state.counter += 1
  }

  if (event.type === 'subtract') {
    state.counter -= 1
  }

  return state
}
