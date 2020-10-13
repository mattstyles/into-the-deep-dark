
import { createStructuredSelector } from 'reselect'
import { View, H1 } from '@raid/kit'

import { TestComponent } from '@itdd/components'

import { connect } from 'signals'
import { getMessage } from 'core/selectors'

const viewSelector = createStructuredSelector({
  message: getMessage
})

export const Home = connect(
  viewSelector,
  ({ message }) => (
    <View>
      <TestComponent>Testing dev environment</TestComponent>
      <H1>{message}</H1>
    </View>
  )
)
