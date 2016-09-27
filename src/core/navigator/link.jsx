
import {push} from './actions'

export const Link = ({route, title, children}) => {
  return (
    <a
      className='Btn Btn--isLink'
      onClick={e => push({
        route,
        state: {
          title
        }
      })}
    >
      {children}
    </a>
  )
}
