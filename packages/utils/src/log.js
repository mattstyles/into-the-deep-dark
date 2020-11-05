
export function log () {
  if (process.env.NODE_ENV !== 'production') {
    console.log(...arguments)
  }
}

export function warn () {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(...arguments)
  }
}

export function err () {
  console.error(...arguments)
}
