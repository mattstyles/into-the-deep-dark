
import PropTypes from 'prop-types'
import cx from 'classnames'

import theme from './theme'

const View = ({children, styles, main, scroll, isBottom, isPadded}) => (
  <div
    style={styles}
    className={cx('View', {
      'Main': main,
      'Scroll': scroll,
      'isBottom': isBottom,
      'isPadded': isPadded
    })}
  >
    {children}
    <style jsx>{`
      .View {
        flex: 1;
        flex-direction: column;
        overflow-x: scroll;
      }
      .Scroll {
        overflow-y: scroll;
      }
      .Main {
        display: flex;
        flex: 1;
      }
      .isPadded {
        padding: ${theme.basePadding}rem;
      }
    `}</style>
    <style jsx global>{`
      .isIosSafari .Scroll.isBottom {
        padding-bottom: 44px;
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

View.defaultProps = {
  main: false,
  scroll: false,
  isBottom: false,
  isPadded: false
}

View.propTypes = {
  main: PropTypes.bool,
  scroll: PropTypes.bool,
  isBottom: PropTypes.bool,
  isPadded: PropTypes.bool
}

export default View
