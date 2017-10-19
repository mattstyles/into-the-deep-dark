
import React from 'react'
import { storiesOf } from '@storybook/react'

import {App, View, P, H1, H2, H3, TextBlock, Text} from '../src'

storiesOf('Text', module)
  .add('Paragraph', () => (
    <App>
      <div style={{maxWidth: 480, padding: 30}}>
        <P>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick. Porchetta chuck spare ribs, short ribs pork belly boudin ribeye prosciutto sirloin biltong kevin chicken pork loin fatback. Tri-tip shank doner cupim corned beef boudin shoulder capicola tenderloin ball tip tongue pork belly.</P>
        <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
        <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
      </div>
    </App>
  ))
  .add('Titled', () => (
    <App>
      <div style={{maxWidth: 480, padding: 30}}>
        <H2>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick. Porchetta chuck spare ribs</H2>
        <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
        <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
      </div>
    </App>
  ))
  .add('Block', () => (
    <App>
      <View>
        <TextBlock styles={{maxWidth: 480, padding: 30}}>
          <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
          <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
          <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
          <H2>Beef meatloaf pork chop</H2>
          <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
          <H3>Frankfurter fatback tongue leberkas ball tip shankle</H3>
          <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
        </TextBlock>
      </View>
    </App>
  ))
  .add('Text', () => (
    <App>
      <div>
        <Text>First block </Text>
        <Text>Second block </Text>
        <span>Regular span </span>
      </div>
    </App>
  ))