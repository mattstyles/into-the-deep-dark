
import Component from 'inferno-component'
import {ACTIONS} from 'actions/tick'
import {store} from 'signals/main'

const TICK_RATE = 1000 / 8

class Tick extends Component {
  componentWillMount () {
    console.log('Starting tick')
    this.onTick()
  }

  onTick = () => {
    store.emit({
      type: ACTIONS.TICK
    })

    setTimeout(this.onTick, TICK_RATE)
  }

  render () {
    return null
  }
}

export const UI = ({rate}) => <span className='Tick'>{rate} ms</span>

export default Tick
