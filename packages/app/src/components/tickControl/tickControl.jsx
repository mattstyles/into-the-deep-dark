
import {createStructuredSelector} from 'reselect'
import {ButtonGroup, theme} from '@idd/components'

import {connect} from 'signals'
import {getTickModifier} from './selectors'
import actions from './actions'

// Default update is 2 per second, defined in core/constants/baseTickSpeed
const tickOptions = [
  {icon: 'PAUSE', id: 0, modifier: 0},
  // 2 per second
  {icon: 'PLAY', id: 1, modifier: 1},
  // 4 per second
  {icon: 'PLAY2', id: 2, modifier: 0.5},
  // 8 per second
  {icon: 'PLAY3', id: 3, modifier: 0.25}
]

const onSelect = option => {
  actions.setAppSpeed.of(option.modifier)
}

const TickControl = ({tickModifier}) => (
  <div
    className='root'
  >
    <ButtonGroup
      classes='Ticker'
      options={tickOptions}
      selectedId={tickModifier}
      onClick={onSelect}
      iconSize={1.2}
      height={2.8}
      tight
    />
    <style jsx>{`
      .root {

      }
      div :global(.Ticker) {
        margin: 0.4rem;
        border-radius: ${theme.borderRadius}px;
        overflow: hidden;
      }
    `}</style>
  </div>
)

const selector = createStructuredSelector({
  tickModifier: getTickModifier
})

export default connect(
  selector,
  TickControl
)
