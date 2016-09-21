
const {location} = window

const getInitialState = () => {
  if (location.state) {
    return location.state
  }

  return {
    title: location.pathname
      .replace(/^./, '')
      .replace(/(^.)/, ch => ch.toUpperCase()) || 'Not Found'
  }
}

export class Route {
  route = '/'
  state = null

  constructor (props) {
    for (let key in props) {
      this[key] = props[key]
    }
  }
}

// Initial state
export const initial = {
  nav: {
    stack: [new Route({
      route: location.pathname,
      state: getInitialState()
      // state: {
      //   // title: (location.state && location.state.title) || location.pathname
      //   //   .replace(/^./, '')
      //   //   .replace(/(^.)/, ch => ch.toUpperCase()) || 'Home'
      // }
    })],
    index: 0
  }
}
