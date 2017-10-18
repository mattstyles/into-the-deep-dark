
import './button'
import './text'
import './layout'
import './icons'

import {isIosSafari} from '../src'

isIosSafari()

// import { Button, Welcome } from '@storybook/react/demo'
//
// storiesOf('Welcome', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
//
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
