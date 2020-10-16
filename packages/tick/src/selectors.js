
import { patchSelector as patch } from './state'

// the rootkey of updateTick is assumed here
// we are using optional chaining and nullish coalescing but a getOrElse
// function still might be a better option
export const getUpdateDelta = state => state?.updateTick?.lastDelta ?? 0

// Here is using the patch selector to scope the data query to this modules
// area of influence
export const getIsRunning = patch('isRunning', false)
