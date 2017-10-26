
import { storiesOf } from '@storybook/react'
// import oc from 'open-color'

import customCells from './table/customCells'
import basic from './table/basic'
import header from './table/header'
import changes from './table/changes'

storiesOf('Table', module)
  .add('Basic table', basic)
  .add('Headed table', header)
  .add('Custom cells', customCells)
  .add('Changing table data', changes)
