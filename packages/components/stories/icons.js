
import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {App, Icon, Text, Button, P} from '../src'

storiesOf('Icon', module)
  .add('Basic arrow', () => (
    <App>
      <Icon icon='ARROW' />
    </App>
  ))
  .add('Inline', () => (
    <App>
      <div>
        <Text align>This icon, </Text>
        <Icon
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
  .add('Spinning Loader', () => (
    <App>
      <div>
        <Icon icon='LOADING' spin />
        <style jsx>{`
          div {
            padding: 30px;
          }
        `}</style>
      </div>
    </App>
  ))
  .add('Rotation', () => (
    <App>
      <Icon icon='ARROW' rotate='0' />
      <Icon icon='ARROW' rotate='90' />
      <Icon icon='ARROW' rotate='-90' />
      <Icon icon='ARROW' rotate='180' />
    </App>
  ))
  .add('Icon button', () => (
    <App styles={{padding: 30}}>
      <div>
        <P>Circular small</P>
        <Button circular icon>
          <Icon icon='CHECK' small />
        </Button>
      </div>
      <div>
        <P>Default Icon</P>
        <Button circular icon>
          <Icon icon='' small />
        </Button>
      </div>
      <div>
        <P>Circular regular</P>
        <Button circular icon>
          <Icon icon='CHECK' />
        </Button>
      </div>
      <div>
        <P>With text</P>
        <Button circular icon>
          <Icon icon='CHECK' inline inText />
          <span>With text</span>
        </Button>
      </div>
      <style jsx>{`
        div {
          margin-bottom: 24px;
        }
      `}</style>
    </App>
  ))
