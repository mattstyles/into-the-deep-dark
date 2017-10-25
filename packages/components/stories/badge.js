
import oc from 'open-color'
import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import {App, Badge, Text} from '../src'

storiesOf('Badge', module)
  .add('Basic badge', () => (
    <App>
      <div>
        <Badge>
          <Text>1</Text>
        </Badge>
      </div>
      <div>
        <Badge styles={{
          width: 24,
          height: 24
        }}>
          <Text>2</Text>
        </Badge>
      </div>
      <style jsx>{`
        div {
          margin: 20px;
        }
      `}</style>
    </App>
  ))
  .add('Coloured badge', () => (
    <App>
      <Badge
        background={oc.red[2]}
        color={oc.gray[8]}
      >
        <Text>1</Text>
      </Badge>
    </App>
  ))
  .add('Rounded badge', () => (
    <App>
      <Badge
        styles={{
          width: 32,
          height: 32,
          margin: 30
        }}
        background={oc.blue[7]}
        borderRadius={3}
      >
        <Text>23</Text>
      </Badge>
    </App>
  ))
  .add('Inline', () => (
    <App>
      <div>
        <Text align>This badge, </Text>
        <Badge
          styles={{width: 24, height: 24}}
          background={`linear-gradient(30deg, ${oc.violet[5]}, ${oc.blue[6]})`}
          inline
        >
          <Text>2</Text>
        </Badge>
        <Text align> , is inline</Text>
        <style jsx>{`
          div {
            padding: 30px;
          }
        `}</style>
      </div>
    </App>
  ))
  .add('Icon background', () => (
    <App>
      <div><Badge icon='BADGE'><Text>1</Text></Badge></div>
      <div><Badge icon='BADGE' styles={{
        width: 24,
        height: 24
      }}><Text>1</Text></Badge></div>
      <style jsx>{`
        div {
          margin: 12px;
        }
      `}</style>
    </App>
  ))
