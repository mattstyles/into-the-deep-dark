
export const toPerc = value => value * 100

const propValidationMsg = (propName, componentName) =>
  `Invalid prop '${propName}' supplied to '${componentName}'`

export const propRange = (min, max) => (props, propName, componentName) => {
  if (typeof props[propName] !== 'number') {
    return new Error(propValidationMsg(propName, componentName))
  }

  if (props[propName] < min || props[propName] > max) {
    return new Error(propValidationMsg(propName, componentName))
  }
}
