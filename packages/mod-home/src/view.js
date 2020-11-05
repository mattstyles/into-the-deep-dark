
import { createStructuredSelector } from 'reselect'
import { View, H1, H2, ButtonGroup, Card, Spacer, Stack } from '@raid/kit'

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
        <Stack>
          <Card variant='darken'>
            <H2>Card title</H2>
          </Card>
          <Card variant='lighten'>
            <H2>Card title</H2>
          </Card>
        </Stack>
      </View>
      <Spacer py={4} />
      <Loading />
    </>
  )
)
