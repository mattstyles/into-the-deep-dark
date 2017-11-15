
import {createStructuredSelector} from 'reselect'
import {View} from '@idd/components'
import {RouteMatcher} from 'raid-navigator'

import {connect} from 'signals'
import {getCurrentPath, getNavigation} from 'core/navigation'

import SubNav from 'components/navigation/subnav'
import Overview from './overview'
import Diplomacy from './diplomacy'

export const navOptions = [
  {text: 'Overview', route: '/comms'},
  {text: 'Diplomacy', route: '/comms/diplomacy'}
]

const Comms = ({
  currentPath,
  navigation,
  options
}) => (
  <View main>
    <SubNav currentPath={currentPath} options={navOptions} />
    <RouteMatcher navigation={navigation}>
      <Overview route='/comms' />
      <Diplomacy route='/comms/diplomacy' />
    </RouteMatcher>
  </View>
)

export default connect(
  createStructuredSelector({
    currentPath: getCurrentPath,
    navigation: getNavigation,
    options: () => navOptions
  }),
  Comms
)
