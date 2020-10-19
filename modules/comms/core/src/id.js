
const gen = num => num * 1e10 >>> 1

const hash = gen(Math.random())
let count = 0

export const generateUuid = () => (hash + gen(++count)).toString(36)
