
import { get } from '@itdd/utils'

const getIndex = get('navigation.index')
const getStack = get('navigation.stack')

export const getCurrentRoutePath = state => {
  const index = getIndex(state).orElse(0)
  const stack = getStack(state).orElse([])
  return stack[index] && stack[index].pathname
}
