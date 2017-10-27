
import PropTypes from 'prop-types'
import cx from 'classnames'

import theme from './theme'

const Well = ({
  styles,
  classes,
  children,
  background,
  borderRadius
}) => (
  <div
    className={cx('Well', classes)}
    style={styles}
  >
    {children}
    <style jsx>{`
      .Well {
        padding: ${theme.basePadding}rem ${theme.basePadding * 1.6}rem;
        background: ${background};
        border-radius: ${borderRadius}px;
      }
    `}</style>
  </div>
)

Well.defaultProps = {
  styles: null,
  classes: '',
  background: theme.gradients.background,
  borderRadius: theme.borderRadius
}
Well.propTypes = {
  background: PropTypes.string,
  borderRadius: PropTypes.number
}

export default Well
