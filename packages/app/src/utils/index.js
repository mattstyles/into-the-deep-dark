
import {Component} from 'react'
import {isEqual} from 'lodash'

/**
 * Using React.PureComponent still triggered renders, presumably it does an
 * equivalency check but updates are always returning new objects, so a
 * shallow equals is required.
 */
export const Pure = Comp => class extends Component {
  shouldComponentUpdate (prev) {
    return !isEqual(prev, this.props)
  }

  render () {
    return Comp(this.props)
  }
}
