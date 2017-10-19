
import oc from 'open-color'

import {Back, Forward} from 'core/navigation'

export const theme = {
  height: 5.4,
  padding: 0.8,
  linkPadding: 1.4
}

const Navigation = () => (
  <nav>
    <Back />
    <Forward />
    <style jsx>{`
      nav {
        min-height: ${theme.height};
        background: ${oc.gray[8]};
      }
    `}</style>
  </nav>
)

export default Navigation
