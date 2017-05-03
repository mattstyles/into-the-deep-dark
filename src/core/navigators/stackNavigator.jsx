
import {createSelector} from 'reselect'
import {back, forward} from 'raid-navigator'

import {connect} from 'core/store'
import {white} from 'core/styles/modules/colors'
import {Button} from 'components'

const selector = state => createSelector(
  navigation => navigation,
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
)(state.navigation)

const StackNavigator = ({back, forward, head, tail}) => (
  <div>
    <Button
      icon='ARROW'
      onClick={back}
      naked
      classes={['Btn--isStack', 'Left']}
      iconClasses={{disabled: head, StackIcon: true}}
    />
    <Button
      icon='ARROW'
      onClick={forward}
      naked
      classes={['Btn--isStack', 'Right']}
      iconClasses={{disabled: tail, StackIcon: true}}
    />
    <style jsx>{`
      div :global(.Btn--isStack) {
        padding: 0;
        width: 32px;
        height: 32px;
      }

      div :global(.StackIcon) {
        fill: ${white[0]};
        transition:
      }

      div :global(.Left) {
        transform: rotate(0deg);
      }

      div :global(.Right) {
        transform: rotate(180deg);
      }

      div :global(.disabled) {
        fill: ${white[4]}
      }
    `}</style>
  </div>
)

export default connect(
  selector,
  StackNavigator
)
