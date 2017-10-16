
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import {Button} from '../src'

storiesOf('Button', module)
  .add('simple text', () => (
    <Button onClick={action('Button clicked')}>
      Click Me
    </Button>
  ))

// import { Button, Welcome } from '@storybook/react/demo'
//
// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
