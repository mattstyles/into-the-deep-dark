
import oc from 'open-color'
import cx from 'classnames'
import PropTypes from 'prop-types'

import {Button} from './button'
import Icon from './icon'
import theme from './theme'

const ButtonGroup = ({
  classes,
  styles,
  options,
  selectedId,
  isHorizontal,
  iconSize,
  onClick
}) => (
  <ul style={styles} className={cx(classes)}>
    {
      options.map(option => (
        <li key={option.id} className={cx({
          'isSelected': option.id === selectedId
        })}>
          <Button
            icon
            transparent
            classes='Option'
            onClick={event => onClick(option)}
          >
            <Icon
              classes='OptionIcon'
              icon={option.icon}
              width={iconSize}
              height={iconSize}
            />
          </Button>
        </li>
      ))
    }
    <style jsx>{`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: ${isHorizontal ? 'row' : 'column'};
      }
      li {
        position: relative;
        flex: 1;
      }
      li :global(.Option) {
        border-radius: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0);
        transition: background ease-out ${theme.transition.main}ms;
      }
      li:hover :global(.Option) {
        background: blue;
        background: rgba(255, 255, 255, 0.1);
      }
      li :global(.OptionIcon) {
        margin: auto;
      }
      li :global(.OptionIcon svg) {
        fill: ${oc.gray[5]};
        transition: fill ease-out ${theme.transition.main}ms;
      }
      li:hover :global(.OptionIcon svg) {
        fill: ${oc.white};
      }
      li.isSelected :global(.OptionIcon svg) {
        fill: ${theme.color.primary};
      }
    `}</style>
  </ul>
)

ButtonGroup.defaultProps = {
  classes: null,
  styles: {},
  iconSize: 2.2,
  isHorizontal: true,
  onClick: () => {}
}
ButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      id: PropTypes.any.isRequired
    })
  ).isRequired,
  selectedId: PropTypes.any.isRequired,
  styles: PropTypes.object,
  iconSize: PropTypes.number,
  isHorizontal: PropTypes.bool,
  onClick: PropTypes.func
}

export default ButtonGroup
