
import { createStructuredSelector } from 'reselect'
import {
  View, Card, Stack, Grid, Box,
  Button, Text
} from '@raid/kit'

import { Link, routes } from '@itdd/router'
import { connect, emit } from 'kunai'
import { actions } from '@itdd/tick'

const viewSelector = createStructuredSelector({
  updateDelta: state => state?.updateTick?.lastDelta,
  isRunning: state => state?.updateTick?.isRunning
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
      </Stack>
    </View>
  )
)
