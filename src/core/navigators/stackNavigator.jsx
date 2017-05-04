
import {createSelector} from 'reselect'
import {back, forward} from 'raid-navigator'

import {connect} from 'core/store'
import {Button} from 'components'

import {white} from 'core/styles/modules/colors'
import {headerHeight} from 'core/styles/theme'

const selector = createSelector(
  ({navigation: {stack, index}}) => ({stack, index}),
  ({stack, index}) => {
    return {
      stack,
      index,
      back,
      forward,
      head: index === 0,
      tail: stack && stack.length
        ? index === stack.length - 1
        : true
    }
  }
)

const btnSize = 32

const StackNavigator = ({back, forward, head, tail}) => (
  <div className='NavStack'>
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
      .NavStack {
        height: ${headerHeight}px;
        padding: ${(headerHeight - btnSize) * 0.5}px;
        box-sizing: border-box;
      }

      div :global(.Btn--isStack) {
        padding: 0;
        margin: 0;
        width: ${btnSize}px;
        height: ${btnSize}px;
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
