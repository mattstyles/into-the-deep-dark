
import {push} from './actions'

export const Link = ({route, title, children}) => {
  return (
    <button
      className='Btn Btn--isLink'
      onClick={e => push({
        route,
        state: {
          title
        }
      })}
    >
      {children}
    </button>
  )
}
