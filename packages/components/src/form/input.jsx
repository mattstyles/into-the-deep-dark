
import PropTypes from 'prop-types'
import cx from 'classnames'
import {noop} from 'lodash/fp'
import vkey from 'vkey'
import oc from 'open-color'

import theme from '../theme'

const ENTER = '<enter>'

const Input = ({
  Container,
  classes,
  styles,
  value,
  placeholder,
  autoSubmit,
  blurOnSubmit,
  onChange,
  onSubmit,
  onBlur,
  onFocus,
  passProps
}) => (
  <Container>
    <input
      className={cx(classes)}
      style={styles}
      value={value}
      placeholder={placeholder}
      onKeyDown={event => {
        if (vkey[event.keyCode] === ENTER) {
          onSubmit(event.target.value)
          if (blurOnSubmit) {
            event.target.blur()
          }
        }
      }}
      onChange={event => onChange(event.target.value)}
      onBlur={event => onBlur(event.target.value)}
      onFocus={event => onFocus(event.target.value)}
      {...passProps}
    />
    <style jsx>{`
      input {
        background: rgba(0, 0, 0, 0.2);
        border: none;
        border-radius: ${theme.borderRadius}px;
        /* Note that password fields should  */
        font-family: ${theme.fonts.main};
        font-size: ${theme.fonts.size.base}rem;
        color: ${oc.gray[0]};
        line-height: 1.4;
        padding: ${theme.basePadding * 0.2}rem ${theme.basePadding}rem;
      }
    `}</style>
  </Container>
)

Input.defaultProps = {
  Container: 'div',
  placeholder: '',
  autoSubmit: false,
  blurOnSubmit: false,
  onBlur: noop,
  onFocus: noop,
  onSubmit: noop,
  passProps: {}
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoSubmit: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  passProps: PropTypes.object
}

export default Input
