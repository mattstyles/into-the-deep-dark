
import { createStructuredSelector } from 'reselect'
import {
  View, Card, Stack, Grid, Box, Flex,
  Button, ButtonGroup, Text
} from '@raid/kit'

import { Link, routes } from '@itdd/router'
import { connect, emit } from 'kunai'
import { actions, selectors } from '@itdd/tick'
import { actions as commsActions } from '@comms/core'

const viewSelector = createStructuredSelector({
  // updateDelta: state => state?.updateTick?.lastDelta,
  // isRunning: state => state?.updateTick?.isRunning
  updateDelta: selectors.getUpdateDelta,
  isRunning: selectors.getIsRunning
})

export const TestView = connect(
  viewSelector,
  ({ updateDelta, isRunning }) => (
    <View mx='auto' width='100%' maxWidth='60rem' p={4}>
      <Stack>
        <Box>
          <Link route={routes.home}>Home</Link>
        </Box>
        <Card>
          <Flex row alignItems='center'>
            <Flex flex={1}>
              <Text>Updates per second</Text>
            </Flex>
            <ButtonGroup>
              <Button onClick={() => emit(actions.change, 1000 / 20)}>20ups</Button>
              <Button onClick={() => emit(actions.change, 1000 / 8)}>8ups</Button>
              <Button onClick={() => emit(actions.change, 2000)}>0.5ups</Button>
            </ButtonGroup>
          </Flex>
        </Card>
        <Card>
          <Grid gridTemplateColumns='1fr 5fr' gridGap={4}>
            <Stack>
              <Button onClick={() => emit(actions.pause)}>Pause</Button>
              <Button onClick={() => emit(actions.resume)}>Resume</Button>
            </Stack>
            <Stack sx={{ alignContent: 'start' }}>
              <Text>Last update delta: <strong>{updateDelta.toFixed(2)}ms</strong></Text>
              <Text>update isRunning: <strong>{JSON.stringify(isRunning)}</strong></Text>
            </Stack>
          </Grid>
        </Card>
        <Card>
          <Stack>
            <Text>Comms</Text>
            <Button onClick={() => emit(commsActions.addMessage)}>Add Message</Button>
          </Stack>
        </Card>
      </Stack>
    </View>
  )
)
