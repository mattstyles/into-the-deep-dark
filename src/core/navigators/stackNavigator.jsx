
import {createSelector} from 'reselect'
import {back, forward} from 'raid-navigator'

import {connect} from 'core/store'
import {Button, Icon} from 'components'

const selector = createSelector(
  state => state.navigation,
  ({stack, index}) => ({
    stack,
    index,
    back,
    forward,
    head: index === 0,
    tail: stack && stack.length
      ? index === stack.length - 1
      : true
  })
)

const StackNavigator = ({back, forward}) => (
  <div>
    <Button icon='ARROW' onClick={forward}>Forward</Button>
    <span onClick={back}>Back</span>
    <button><Icon icon='FACEBOOK' />fb</button>
    <style jsx>{`
      span {
        font-size: 15px;
        margin-right: 6px;
      }
    `}</style>
  </div>
)

export default connect(
  selector,
  StackNavigator
)
