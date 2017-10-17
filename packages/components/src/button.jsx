
import oc from 'open-color'
import cx from 'classnames'
import PropTypes from 'prop-types'

import theme from './theme'

const Button = ({
  children,
  onClick,
  styles,
  classes,
  inline
}) => (
  <button
    className={cx(classes, 'Btn', {
      'Btn--inline': inline
    })}
    style={styles}
    onClick={onClick}
  >
    {children}
    <style jsx>{`
      .Btn {
        background: ${oc.blue[5]};
        color: ${oc.white};
        padding: 0 ${theme.basePadding * 3}rem;
        font-size: ${theme.baseFontSize}rem;
        line-height: 3;
        border: none;
        border-radius: ${theme.borderRadius}px;
        cursor: pointer;
        transition: background ${theme.transition.main}ms, text-shadow ${theme.transition.main}ms;
        text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
      }
      .Btn:hover {
        background: ${oc.blue[7]};
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      }
      .Btn:active {
        background: ${oc.blue[8]};
      }
      .Btn--inline {
        color: inherit;
        background: transparent;
        padding: 0;
        font-size: inherit;
        line-height: 1.4rem;
        display: inline;
        border-radius: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        transition: color ${theme.transition.main}ms, border-color ${theme.transition.main}ms;
      }
      .Btn--inline:hover {
        background: transparent;
        text-shadow: none;
        color: ${oc.green[4]};
        border-color: ${oc.green[4]};
      }
      .Btn--inline:active {
        background: transparent;
      }
    `}</style>
  </button>
)

Button.defaultProps = {
  onClick: () => {},
  styles: null,
  classes: null,
  inline: false
}

Button.propTypes = {
  inline: PropTypes.bool
}

export default Button
