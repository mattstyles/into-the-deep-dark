
export let routes = {
  home: '/',
  test: '/test',
  comms: '/comms'
}

export const registerRoute = (route) => {
  routes = {
    ...routes,
    ...route
  }
}
