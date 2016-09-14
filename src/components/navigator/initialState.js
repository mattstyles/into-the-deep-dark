
// nav
let initialRoute = {
  pathname: window.location.pathname,
  title: window.location.pathname
    .replace(/^./, '')
    .replace(/(^.)/, ch => ch.toUpperCase()) || 'Home'
}

export default {
  stack: [initialRoute]
}
