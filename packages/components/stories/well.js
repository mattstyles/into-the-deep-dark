
import React from 'react'

import {storiesOf} from '@storybook/react'

import {App, theme, View, Well, Text, H2, P} from '../src'

storiesOf('Well', module)
  .add('Basic', () => (
    <App>
      <div>
        <Well>
          <Text>What’s that Lassie? Little Timmy is stuck down the well?</Text>
        </Well>
      </div>
      <div>
        <Well>
          <H2>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick. Porchetta chuck spare ribs</H2>
          <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
          <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
        </Well>
      </div>
      <style jsx>{`
        div {
          margin: 20px;
        }
      `}</style>
    </App>
  ))
  .add('Custom background', () => (
    <App>
      <View>
        <div>
          <Well background={theme.gradients.primaryRadial}>
            <Text>Hello world</Text>
          </Well>
        </div>
        <div>
          <Well background={theme.gradients.primaryRadial}>
            <H2>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick. Porchetta chuck spare ribs</H2>
            <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
            <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
          </Well>
        </div>
        <div>
          <Well background={theme.gradients.primary}>
            <Text>Hello world</Text>
          </Well>
        </div>
        <div>
          <Well background={theme.gradients.primary}>
            <H2>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick. Porchetta chuck spare ribs</H2>
            <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
            <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
          </Well>
        </div>
        <style jsx>{`
          div {
            margin: 20px;
            text-shadow: 0px 1px rgba(0, 0, 0, 0.25);
          }
        `}</style>
      </View>
    </App>
  ))
