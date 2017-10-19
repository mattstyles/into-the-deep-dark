
import PropTypes from 'prop-types'
import cx from 'classnames'

const Pane = ({children, styles, split, flex}) => (
  <div
    style={styles}
    className={cx('Pane', {
      'Split': split
    })}
  >
    {children}
    <style jsx>{`
      .Pane {
        display: flex;
        flex: ${flex};
        flex-direction: column;
      }
      .Split {
        flex-direction: row;
      }
    `}</style>
  </div>
)

Pane.defaultProps = {
  split: false,
  flex: 1
}

Pane.propTypes = {
  split: PropTypes.bool,
  flex: PropTypes.number
}

export default Pane
