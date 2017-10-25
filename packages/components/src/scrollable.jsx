
import cx from 'classnames'
import PropTypes from 'prop-types'

import theme from './theme'

const Scrollable = ({
  children,
  classes,
  horizontal,
  vertical,
  styles
}) => (
  <div
    style={styles}
    className={cx('Scrollable', {
      'Scrollbars': vertical || horizontal
    }, classes)}
  >
    {children}
    <style jsx>{`
      .Scrollable {
        overflow-x: ${horizontal ? 'scroll' : 'hidden'};
        overflow-y: ${vertical ? 'scroll' : 'hidden'};
      }
      .Scrollbars::-webkit-scrollbar {
        width: ${vertical ? 2 : 0}px;
        height: ${horizontal ? 2 : 0}px;
      }
      .Scrollbars::-webkit-scrollbar-track,
      .Scrollbars::-webkit-scrollbar-corner {
        border-radius: 0;
        background: rgba(0, 0, 0, 0.2);
      }
      .Scrollbars::-webkit-scrollbar-thumb {
        border-radius: 0;
        background: ${theme.color.primaryDark};
      }
    `}</style>
  </div>
)
Scrollable.defaultProps = {
  classes: null,
  styles: null,
  horizontal: false,
  vertical: false
}
Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool
}

export default Scrollable
