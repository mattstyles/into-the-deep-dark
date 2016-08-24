
export const ACTIONS = {
  ADD: 'counter:add',
  SUBTRACT: 'counter:subtract'
}

export const reducer = (state, event) => {
  if (event.type === ACTIONS.ADD) {
    state.counter += 1
  }

  if (event.type === ACTIONS.SUBTRACT) {
    state.counter -= 1
  }

  return state
}
