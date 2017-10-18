
import {Navigation} from 'core/navigation'
import Home from 'views/home'
import Settings from 'views/settings'

const Router = () => (
  <Navigation>
    <Home route='/' />
    <Settings route='/settings' />
  </Navigation>
)

export default Router
