
import { Spacer } from '@raid/kit'

import { Aside } from './aside'
import { Header } from './header'
import { Nav } from './nav'

export default ({
  sx
}) => {
  return (
    <Aside sx={sx}>
      <Header />
      <Spacer py={6} />
      <Nav />
    </Aside>
  )
}
