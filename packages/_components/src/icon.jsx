
import oc from 'open-color'
import cx from 'classnames'
import PropTypes from 'prop-types'

import theme from './theme'
import get from './icons'

const Icon = ({
  icon,
  classes,
  styles,
  inline,
  spin,
  rotate,
  small,
  large,
  inText,
  from,
  width,
  height,
  fit,
  color
}) => {
  let svg = {
    __html: from(icon)
  }

  let sizeStyles = {}
  if (width) sizeStyles.width = `${width}rem`
  if (height) sizeStyles.height = `${height}rem`

  return (
    <div
      className={cx({
        'Icon': true,
        'Icon--isInline': inline,
        'Icon--isSmall': small,
        'Icon--isLarge': large,
        'Icon--isSpinning': spin,
        'Icon--rotate': rotate,
        'Icon--withText': inText,
        'Icon--fit': fit
      }, classes)}
      style={{
        ...sizeStyles,
        ...styles
      }}
    >
      <i
        className={cx({
        })}
        dangerouslySetInnerHTML={svg}
      />
      <style jsx>{`
        @keyframes spinZ {
          from { transform: rotateZ( 0deg ) }
          to { transform: rotateZ( 360deg ) }
        }
        i, i :global(svg) {
          fill: ${color};
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .Icon {
          position: relative;
          display: block;
          width: ${theme.baseIconSize}rem;
          height: ${theme.baseIconSize}rem;
        }
        .Icon--isInline {
          display: inline-block;
          vertical-align: middle;
        }
        .Icon--fit {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .Icon--isSpinning {
          animation: spinZ ${theme.transition.spin}ms infinite linear;
        }
        .Icon--rotate {
          transform: rotate(${rotate}deg);
        }
        .Icon--isSmall {
          width: ${theme.baseIconSize * 0.75}rem;
          height: ${theme.baseIconSize * 0.75}rem;
        }
        .Icon--isLarge {
          width: ${theme.baseIconSize * 1.25}rem;
          height: ${theme.baseIconSize * 1.25}rem;
        }
        .Icon--withText {
          width: ${theme.baseIconTextSize}rem;
          height: ${theme.baseIconTextSize}rem;
        }
      `}</style>
    </div>
  )
}

Icon.defaultProps = {
  classes: '',
  styles: {},
  inline: false,
  spin: false,
  rotate: 0,
  small: false,
  large: false,
  from: get,
  fit: false,
  color: oc.white
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  rotate: PropTypes.number,
  small: PropTypes.bool,
  large: PropTypes.bool,
  from: PropTypes.func,
  fit: PropTypes.bool,
  color: PropTypes.string
}

export default Icon
