
import classnames from 'classnames'
import {noop} from 'utils/functional'
import {def} from 'utils/component'
import Icon from 'components/icon/icon'

const Button = def(props => {
  let icon = props.icon
    ? <Icon
      classes={classnames('Btn--icon', props.iconClasses)}
      icon={props.icon}
    />
    : null

  let classes = classnames(
    'Btn',
    props.classes,
    {
      'Btn--isSmall': props.small,
      'Btn--isLarge': props.large,
      'Btn--isIcon': !props.children && !props.text,
      'Btn--isCircular': props.circle
    }
  )

  let contents = props.text || props.children
    ? <span>{props.text || props.children}</span>
    : null

  console.log(props)

  return (
    <button
      className={classes}
      onClick={props.onClick || props.onPress}
    >
      {icon}
      {contents}
    </button>
  )
}, {
  text: null,
  icon: null,
  small: false,
  large: false,
  circle: false,
  onClick: noop,
  onPress: noop,
  classes: null,
  iconClasses: null
})

Button.defaultProps = {
  text: null,
  icon: null,
  small: false,
  large: false,
  circle: false,
  onClick: noop,
  onPress: noop,
  classes: null,
  iconClasses: null
}

export default Button
