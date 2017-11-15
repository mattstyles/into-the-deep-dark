
import {words} from 'lodash'

export const contains = (a, b) => {
  return !!words(a, b).length
}
