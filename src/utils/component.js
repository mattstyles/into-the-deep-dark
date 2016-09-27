
export const def = (Component, defProps) => {
  return props => {
    props = Object.assign({}, defProps, props)
    return Component(props)
  }
}
