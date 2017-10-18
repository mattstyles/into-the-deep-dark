
import {View, H1} from '@idd/components'

import {Forward, Back} from 'core/navigation'

const SettingsView = () => (
  <View main>
    <div>
      <Back />
      <Forward />
    </div>
    <H1>Settings View</H1>
  </View>
)

export default SettingsView
