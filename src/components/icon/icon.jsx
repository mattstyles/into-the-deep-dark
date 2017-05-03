
import classnames from 'classnames'

import {fit} from 'core/styles/mixins'
import getIcon from './icons'

const Icon = ({icon, classes, inline}) => (
  <i
    className={classnames('Icon', {
      'Icon--isInline': inline
    }, classes)}
  >
    {getIcon(icon)}
    <style jsx>{`
      .Icon {
        display: block;
        position: relative;
        width: 60px;
        height: 60px;
      }
      .Icon :global(svg) {
        ${fit}
      }
      .Icon--isInline {
        display: inline-block;
        vertical-align: middle;
      }
    `}</style>
  </i>
)

export default Icon
