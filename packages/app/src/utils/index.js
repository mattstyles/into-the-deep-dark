
import {PureComponent} from 'react'

export const Pure = Component => class extends PureComponent {
  render () {
    return Component(this.props)
  }
}
