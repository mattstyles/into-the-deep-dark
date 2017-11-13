
import {Component} from 'react'
import {isEqual} from 'lodash'

const compare = (a, b) => !isEqual(a, b)

/**
 * Using React.PureComponent still triggered renders, presumably it does an
 * equivalency check but updates are always returning new objects, so a
 * shallow equals is required (lodash/isEqual is actually deep comp).
 */
export const Pure = (
  Comp,
  shouldComponentUpdate = compare
) => class extends Component {
  name = Comp.name

  shouldComponentUpdate (prev) {
    return shouldComponentUpdate(prev, this.props)
  }

  render () {
    return Comp(this.props)
  }
}
