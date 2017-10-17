
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import oc from 'open-color'
import {App, Button, P} from '../src'

storiesOf('Button', module)
  .add('simple text', () => (
    <App>
      <Button onClick={action('Button clicked')}>
        Click Me
      </Button>
    </App>
  ))
  .add('with custom class', () => (
    <App>
      <div>
        <Button
          onClick={action('Button clicked')}
          classes='CustomBtn'
        >
          With custom class
        </Button>
        <style jsx>{`
          div :global(.CustomBtn) {
            background: ${oc.green[5]};
          }
          div :global(.CustomBtn:hover) {
            background: ${oc.green[7]};
          }
          div :global(.CustomBtn:active) {
            background: ${oc.green[8]};
          }
        `}</style>
      </div>
    </App>
  ))
  .add('with custom style', () => (
    <App>
      <Button
        onClick={action('Button clicked')}
        styles={{
          background: `linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`
        }}
      >
        With custom styling
      </Button>
    </App>
  ))
  .add('inline', () => (
    <App styles={{padding: 30}}>
      <P>
        <span>This is a sentence with a clickable </span>
        <Button
          inline
          onClick={action('Button clicked')}
        >
           button
        </Button>
        <span>.</span>
      </P>
    </App>
  ))
