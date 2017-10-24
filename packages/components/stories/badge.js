
import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {App, Badge, Text} from '../src'

storiesOf('Badge', module)
  .add('Basic badge', () => (
    <App>
      <Badge icon='ARROW' />
    </App>
  ))
  .add('Inline', () => (
    <App>
      <div>
        <Text align>This badge, </Text>
        <Badge
          styles={{width: 14, height: 14}}
          icon='CHECK'
          inline
        />
        <Text align> , is inline</Text>
        <style jsx>{`
          div {
            padding: 30px;
          }
        `}</style>
      </div>
    </App>
  ))
