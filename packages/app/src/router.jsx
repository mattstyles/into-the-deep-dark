
import {Navigation} from 'core/navigation'
import Home from 'views/home'
import Settings from 'views/settings'
import Comms from 'views/comms'
import Diplomacy from 'views/diplomacy'

const Router = () => (
  <Navigation>
    <Home route='/' />
    <Settings route='/settings' />
    <Comms route='/comms' />
    <Diplomacy route='/comms/diplomacy' />
  </Navigation>
)

export default Router
