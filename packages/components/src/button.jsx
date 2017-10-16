
import oc from 'open-color'
import cx from 'classnames'

import theme from './theme'

const Button = ({children, onClick, styles, classes}) => (
  <button
    className={cx(classes, 'Btn')}
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
        transition: background ${theme.transition.main}ms;
      }
      .Btn:hover {
        background: ${oc.blue[7]};
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      }
      .Btn:active {
        background: ${oc.blue[8]};
      }
    `}</style>
  </button>
)

Button.defaultProps = {
  onClick: () => {},
  styles: null,
  classes: null
}

export default Button
