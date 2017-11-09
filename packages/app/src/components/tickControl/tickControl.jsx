
import {createStructuredSelector} from 'reselect'

import {connect, dispatch} from 'signals'
import {getTickModifier} from './selectors'
import actions from './actions'

const dispatchAction = event => dispatch(actions.setAppSpeed.of(2))

const TickControl = ({tickModifier}) => (
  <div
    className='root'
    onClick={dispatchAction}
  >
    Hello ticker {tickModifier}
    <style jsx>{`
      .root {
        font-size: 1.2rem;
        color: rgb(244, 48, 22);
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
