
import {Navigation} from 'core/navigation'
import Home from 'views/home'
import Settings from 'views/settings'
import Comms from 'views/comms'

const Router = () => (
  <Navigation>
    <Home route='/' />
    <Settings route='/settings' />
    <Comms route='/comms' />
  </Navigation>
)

export default Router
