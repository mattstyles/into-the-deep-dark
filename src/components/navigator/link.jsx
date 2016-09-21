
import {onPush} from './actions'

export const Link = ({route, title, children}) => {
  return (
    <button
      className='Btn Btn--isLink'
      onClick={e => onPush({route, title})}
    >
      {children}
    </button>
  )
}
