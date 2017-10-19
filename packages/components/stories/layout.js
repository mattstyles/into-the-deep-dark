
import React from 'react'
import { storiesOf } from '@storybook/react'
import oc from 'open-color'

import {App, View, Pane, P, H1, H2, H3, TextBlock, Text} from '../src'

storiesOf('Layout', module)
  .add('Scroll View', () => (
    <App>
      <View main>
        <div style={{background: oc.gray[1], padding: 30}}>
          <Text>Title Block</Text>
        </div>
        <View scroll isBottom>
          <TextBlock styles={{padding: 30}}>
            <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
            <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
            <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
            <H2>Beef meatloaf pork chop</H2>
            <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
            <H3>Frankfurter fatback tongue leberkas ball tip shankle</H3>
            <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
          </TextBlock>
          <TextBlock styles={{padding: 30}}>
            <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
            <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
            <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
            <H2>Beef meatloaf pork chop</H2>
            <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
            <H3>Frankfurter fatback tongue leberkas ball tip shankle</H3>
            <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
          </TextBlock>
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
            <TextBlock styles={{padding: 30}}>
              <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
              <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
              <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
              <H2>Beef meatloaf pork chop</H2>
              <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
              <H3>Frankfurter fatback tongue leberkas ball tip shankle</H3>
              <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
            </TextBlock>
          </View>
        </Pane>
      </Pane>
    </App>
  ))
