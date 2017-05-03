
import {Icon} from 'components'

const Button = ({icon, onClick, children}) => (
  <button onClick={onClick}>
    {icon && <Icon icon={icon} inline />}
    {children}
    <style jsx>{`
      button {
        padding: 3px 18px;
      }
      button :global(i) {
        fill: blue;
      }
    `}</style>
  </button>
)

export default Button
