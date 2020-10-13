
import { addBase } from '@itdd/storybook'

import { View, Text } from '@raid/kit'

export default {
  title: 'Index',
  decorators: [addBase()]
}

export const Test = () => {
  return (
    <View>
      <Text>Into the deep dark</Text>
    </View>
  )
}
