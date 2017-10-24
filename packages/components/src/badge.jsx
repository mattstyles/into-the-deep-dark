
import PropTypes from 'prop-types'
import cx from 'classnames'

import theme from './theme'
import Icon from './icon'
import get from './icons'

const Badge = ({
  styles,
  classes,
  children,
  background,
  inline,
  icon,
  iconSet
}) => (
  <span
    className={cx('Badge', {
      'Badge--isInline': inline
    }, classes)}
    style={styles}
  >
    <Icon fit icon={icon} from={iconSet} />
    {children}
    <style jsx>{`
      .Badge {
        position: relative;
        width: ${theme.baseIconSize}rem;
        height: ${theme.baseIconSize}rem;
      }
      .Badge--isInline {
        display: inline-block;
        vertical-align: middle;
      }
    `}</style>
  </span>
)

Badge.defaultProps = {
  styles: null,
  classes: '',
  inline: false,
  iconSet: get,
  background: theme.color.primary
}
Badge.propTypes = {
  icon: PropTypes.string.isRequired,
  iconSet: PropTypes.func,
  inline: PropTypes.bool
}

export default Badge
