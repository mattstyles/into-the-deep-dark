
import cx from 'classnames'

import {Icon} from 'components'
import {black, white} from 'core/styles/modules/colors'
import {fit} from 'core/styles/mixins'

const Button = ({
  icon,
  onClick,
  classes,
  iconClasses,
  naked,
  disabled,
  children
}) => (
  <button
    onClick={event => {
      if (disabled) return
      onClick(event)
    }}
    className={cx({
      'Btn--isNaked': naked
    }, classes)}
  >
    {icon && <Icon icon={icon} inline strip classes={iconClasses} />}
    {children}
    <style jsx>{`
      button {
        position: relative;
        padding: 18px 7px;
        background: ${black[1]};
        color: ${white[0]};
        font-size: 14px;
        line-height: 1;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 1px;
        border: none;
        border-radius: 3px;
        margin: 4px;
        cursor: pointer;
        box-sizing: border-box;
        vertical-align: middle;
      }
      button:focus {
        outline: none;
      }
      button :global(i) {
        ${fit}
        fill: black;
      }

      .Btn--isNaked {
        background: transparent;
      }
    `}</style>
  </button>
)

export default Button
