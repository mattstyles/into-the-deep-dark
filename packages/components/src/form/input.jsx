
import PropTypes from 'prop-types'
import cx from 'classnames'
import {noop} from 'lodash/fp'
import vkey from 'vkey'

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
  onFocus
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
    />
    <style jsx>{`
      input {
        background: yellow;
      }
    `}</style>
  </Container>
)

Input.defaultProps = {
  Container: 'span',
  placeholder: '',
  autoSubmit: false,
  blurOnSubmit: false,
  onBlur: noop,
  onFocus: noop,
  onSubmit: noop
}
Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoSubmit: PropTypes.bool,
  blurOnSubmit: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmit: PropTypes.func
}

export default Input
