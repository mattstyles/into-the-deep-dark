
import {Link} from './link'

const NavTitle = ({base}) => {
  return (
    <div className='Nav-Title'>
      <h1 className='Nav-Base'><Link route='/'>{base.title}</Link></h1>
      <div className='Nav-BaseDetails'>
        <span className='BD-type'>{base.type}</span>
        <span className='BD-codename'>{` (${base.codename})`}</span>
        <span>{' - '}</span>
        <Link
          route={`/star/${base.star.replace(/\s/, '')}`}
          state={base.star}
          classes='BD-star'
        >{`${base.star}`}</Link>
        <span>{' - '}</span>
        <Link
          route={`/planet/${base.planet.replace(/\s/, '')}`}
          state={base.planet}
          classes='BD-planet'
        >{`${base.planet}`}</Link>
      </div>
    </div>
  )
}

export default NavTitle
