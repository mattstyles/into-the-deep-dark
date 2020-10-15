
import { createActions } from '@raid/navigator'
import { createMemoryHistory } from 'history'

export const history = createMemoryHistory()
export const actions = createActions(history)

export const events = {
  push: 'navigation:push',
  pop: 'navigation:pop'
}

export const push = ({
  route,
  state
}) => {
  actions.push(route, state)
}

export const pop = () => {
  actions.back()
}

export const getNavigation = state => state?.navigation
