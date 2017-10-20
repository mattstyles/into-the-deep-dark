
import cx from 'classnames'
import PropTypes from 'prop-types'

import theme from './theme'

/**
 * Expects to live inside an option component i.e. something that can be
 * selected and has an on/off state
 */
const OptionSelected = ({
  color,
  isSelected,
  isHorizontal
}) => (
  <div className={cx({
    isSelected,
    isHorizontal,
    isVertical: !isHorizontal
  })}>
    <style jsx>{`
      div {
        position: absolute;
        background: transparent;
        transition: background ease-out ${theme.transition.main}ms, transform ease-out ${theme.transition.main}ms;
        transform-origin: center;
      }
      div.isSelected {
        background: ${color};
      }
      div.isHorizontal {
        left: 0;
        bottom: 0;
        right: 0;
        height: 2px;
        transform: scaleX(0);
      }
      div.isHorizontal.isSelected {
        transform: scaleX(1);
      }
      div.isVertical {
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        transform: scaleY(0);
      }
      div.isVertical.isSelected {
        transform: scaleY(1);
      }
    `}</style>
  </div>
)

OptionSelected.defaultProps = {
  color: theme.color.primary,
  isSelected: false,
  isHorizontal: false
}
OptionSelected.propTypes = {
  color: PropTypes.string,
  isSelected: PropTypes.bool,
  isHorizontal: PropTypes.bool
}

export default OptionSelected
