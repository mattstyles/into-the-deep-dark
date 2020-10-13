
import oc from 'open-color'
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
  color,
  inline,
  icon,
  iconSet,
  borderRadius
}) => (
  <span
    className={cx('Badge', {
      'Badge--isInline': inline
    }, classes)}
    style={styles}
  >
    {icon && <Icon fit icon={icon} from={iconSet} />}
    {!icon && <div className='Backing' />}
    <div className='Badge-text'>{children}</div>
    <style jsx>{`
      .Badge {
        display: flex;
        position: relative;
        width: ${theme.baseIconSize}rem;
        height: ${theme.baseIconSize}rem;
      }
      .Badge :global(.Icon) {
        z-index: 10;
      }
      .Badge :global(svg) {
        fill: ${background};
      }
      .Badge :global(span) {
        color: ${color};
      }
      .Badge--isInline {
        display: inline-block;
        display: inline-flex;
        vertical-align: middle;
      }
      .Badge-text {
        position: relative;
        margin: auto;
        text-align: center;
        z-index: 20;
        color: ${color};
      }
      .Backing {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: ${borderRadius}px;
        background: ${background};
        z-index: 10;
      }
    `}</style>
  </span>
)

Badge.defaultProps = {
  styles: null,
  classes: '',
  inline: false,
  icon: '',
  iconSet: get,
  background: theme.color.primary,
  color: oc.white,
  borderRadius: 200
}
Badge.propTypes = {
  icon: PropTypes.string,
  iconSet: PropTypes.func,
  inline: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.number
}

export default Badge
