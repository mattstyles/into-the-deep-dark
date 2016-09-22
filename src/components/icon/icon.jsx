
import classnames from 'classnames'

import getIcon from './icons'

const Icon = ({icon, classes}) => {
  let svg = {
    __html: getIcon(icon)
  }

  return (
    <i
      className={classnames('Icon', classes)}
      dangerouslySetInnerHTML={svg}
    >
    </i>
  )
}

// Currently does not work with Inferno (check v1)
Icon.defaultProps = {
  classes: ''
}

export default Icon
