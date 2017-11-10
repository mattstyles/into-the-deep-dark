
import {createStructuredSelector} from 'reselect'
import {ButtonGroup, theme} from '@idd/components'

import {connect} from 'signals'
import {getTickModifier} from './selectors'
import actions from './actions'

const tickOptions = [
  {icon: 'ARROW', id: 0, modifier: 0},
  {icon: 'CHECK', id: 1, modifier: 1},
  {icon: 'SETTINGS', id: 2, modifier: 2},
  {icon: 'HOME', id: 3, modifier: 3}
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
