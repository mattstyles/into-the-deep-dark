
import { createStructuredSelector } from 'reselect'
import { View, Text } from '@raid/kit'

import { connect } from 'signals'
import { getMessage } from 'core/selectors'

const viewSelector = createStructuredSelector({
  message: getMessage
})

export const Home = connect(
  viewSelector,
  ({ message }) => (
    <View>
      <Text as='h1'>{message}</Text>
    </View>
  )
)
