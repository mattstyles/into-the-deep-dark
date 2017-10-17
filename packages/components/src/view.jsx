
import PropTypes from 'prop-types'
import cx from 'classnames'

const View = ({children, styles, main, scroll, isBottom}) => (
  <div
    style={styles}
    className={cx('View', {
      'Main': main,
      'Scroll': scroll,
      'isBottom': isBottom
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

        /* only required for ios safari */
        /* as the menu bar is locked visible it obscures the view */
        /* should only be present on scrollable that touch the bottom
        of the page and only for ios safari */
        /*
        padding-bottom: 44px;
        box-sizing: border-box;
        */
      }
      .Main {
        display: flex;
        flex: 1;
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
  isBottom: false
}

View.propTypes = {
  main: PropTypes.bool,
  scroll: PropTypes.bool,
  isBottom: PropTypes.bool
}

export default View
