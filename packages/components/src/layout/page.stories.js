
import { addBase } from '@itdd/storybook'

import { Page } from './page'

export default {
  title: 'Layout/Page',
  decorators: [addBase()]
}

export const PageStory = () => {
  return (
    <Page />
  )
}
PageStory.storyName = 'Page'
