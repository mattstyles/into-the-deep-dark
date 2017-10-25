
import React from 'react'
import { storiesOf } from '@storybook/react'
import oc from 'open-color'

import {App, View, Pane, P, H1, H2, H3, TextBlock, Text, Scrollable} from '../src'

const SomeText = () => (
  <TextBlock styles={{padding: 30}}>
    <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
    <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
    <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
    <H2>Beef meatloaf pork chop</H2>
    <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
    <H3>Frankfurter fatback tongue leberkas ball tip shankle</H3>
    <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
  </TextBlock>
)

storiesOf('Layout', module)
  .add('Scroll View', () => (
    <App>
      <View main>
        <div style={{background: oc.green[7], padding: 30}}>
          <Text>Title Block</Text>
        </div>
        <View scroll isBottom>
          <SomeText />
          <SomeText />
        </View>
      </View>
    </App>
  ))
  .add('Split panes', () => (
    <App>
      <Pane split>
        <Pane flex={0.2}>
          <View>
            <P>Some text</P>
          </View>
        </Pane>
        <Pane flex={0.8}>
          <View scroll isBottom>
            <SomeText />
          </View>
        </Pane>
      </Pane>
    </App>
  ))
  .add('Vertical scrollable', () => (
    <App>
      <Scrollable vertical styles={{
        width: 400,
        height: 300,
        margin: 20,
        background: `linear-gradient(30deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))`
      }}>
        <SomeText />
      </Scrollable>
    </App>
  ))
  .add('Horizontal scrollable', () => (
    <App>
      <Scrollable horizontal styles={{
        width: 400,
        height: 300,
        margin: 20,
        background: `linear-gradient(30deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))`
      }}>
        <div style={{
          width: 800,
          height: 300
        }}>
          <SomeText />
        </div>
      </Scrollable>
    </App>
  ))
  .add('Scrollable', () => (
    <App>
      <View>
        <Text block styles={{margin: 20}}>
          Scrollable view with scoped scrollable component with custom scrollbars
        </Text>
        <Scrollable horizontal vertical styles={{
          width: 400,
          height: 300,
          margin: 20,
          background: `linear-gradient(30deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))`
        }}>
          <div style={{
            width: 800,
            height: 400
          }}>
            <SomeText />
          </div>
        </Scrollable>
        <SomeText />
        <SomeText />
      </View>
    </App>
  ))
