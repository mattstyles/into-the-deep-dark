
import { createStructuredSelector } from 'reselect'
import {
  View, Card, Stack, Grid,
  Button, Text
} from '@raid/kit'

import { connect, emit } from 'signals'
import { actions } from 'core/tick'

const viewSelector = createStructuredSelector({
  updateDelta: state => state?.updateTick?.lastDelta,
  isRunning: state => state?.updateTick?.isRunning
})

export const Test = connect(
  viewSelector,
  ({ updateDelta, isRunning }) => (
    <View mx='auto' width='100%' maxWidth='60rem' p={4}>
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
    </View>
  )
)
