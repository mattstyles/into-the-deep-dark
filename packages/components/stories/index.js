
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import oc from 'open-color'
import {App, Button} from '../src'

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

// import { Button, Welcome } from '@storybook/react/demo'
//
// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
