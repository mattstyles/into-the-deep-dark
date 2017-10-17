
import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import oc from 'open-color'
import {App, Button, P, H1, H2, H3} from '../src'

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
  .add('Block', () => (
    <App>
      <div style={{maxWidth: 480, padding: 30}}>
        <H1>Bacon ipsum dolor amet beef ribs kielbasa bacon drumstick</H1>
        <P>Alcatra strip steak ribeye turducken. Alcatra fatback leberkas, kevin shank capicola tenderloin kielbasa. Venison t-bone pastrami kevin.</P>
        <P>Boudin landjaeger chuck strip steak. Pig rump ham hock alcatra, chicken biltong bresaola turducken turkey frankfurter. Turducken pastrami kielbasa porchetta filet mignon turkey chuck fatback pork. Porchetta spare ribs pork belly tenderloin shoulder, venison picanha cow biltong cupim kevin landjaeger flank hamburger.</P>
        <H2>Beef meatloaf pork chop</H2>
        <P>Kielbasa filet mignon fatback meatball hamburger jowl porchetta brisket swine pig tail. Landjaeger shank prosciutto meatloaf, leberkas ham meatball ball tip shankle short loin jowl sausage pork loin.</P>
        <H3>Frankfurter fatback tongue leberkas ball tip shankle.</H3>
        <P>Landjaeger shankle pancetta t-bone cupim boudin drumstick ball tip filet mignon picanha beef bacon.</P>
      </div>
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
