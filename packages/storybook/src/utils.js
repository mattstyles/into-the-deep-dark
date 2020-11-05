
import { Base } from './base'
import { Layout } from './layouts'

import { theme as core } from '@itdd/theme'

const defaults = {
  theme: core,
  Layout: Layout
}

export const addBase = ({
  theme,
  Layout
} = defaults) => story => {
  return (
    <Base theme={theme}>
      <Layout>
        {story()}
      </Layout>
    </Base>
  )
}
