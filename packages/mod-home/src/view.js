
import { createStructuredSelector } from 'reselect'
import { View, H1, ButtonGroup } from '@raid/kit'

import { TestComponent, Loading } from '@itdd/components'
import { Link, routes } from '@itdd/router'

import { connect } from 'kunai'
import { selectors } from '@itdd/utils'

const { getMessage } = selectors

const viewSelector = createStructuredSelector({
  message: getMessage
})

export const HomeView = connect(
  viewSelector,
  ({ message }) => (
    <>
      <View>
        <TestComponent>Testing dev environment</TestComponent>
        <ButtonGroup>
          <Link route={routes.home}>Home</Link>
          <Link route={routes.test}>Test</Link>
          <Link route={routes.comms}>Comms</Link>
        </ButtonGroup>
        <H1>{message}</H1>
      </View>
      <Loading />
    </>
  )
)