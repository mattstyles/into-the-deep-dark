
import {OptionList, NavOption} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

import {connect} from 'signals'
import {getCurrentRoute} from 'core/navigation'

const styling = {
  width: 4.4,
  background: 'rgb(27, 31, 34)',
  backgroundHover: 'rgba(255, 255, 255, 0.1)',
  backgroundSelected: 'rgba(0, 0, 0, 0.2)',
  iconSize: 2.2,
  itemHeight: 3.6
}

const options = [
  {icon: 'VIEW_COMMS', route: '/', text: 'Comms'},
  {icon: 'VIEW_STOCK', route: '/stock', text: 'Stock'},
  {icon: 'VIEW_ENGINEERING', route: '/engineering', text: 'Engineeering'},
  {icon: 'VIEW_PERSONNEL', route: '/personnel', text: 'Personnel'},
  {icon: 'VIEW_EXPLORE', route: '/exploration', text: 'Exploration'}
]

const SideNav = ({route: {pathname}}) => (
  <div>
    <OptionList height={3.6}>
      {
        options.map(opt => (
          <NavOption
            key={opt.text}
            text={opt.text}
            icon={opt.icon}
            iconSet={get}
            iconSize={2.2}
            route={opt.route}
            isSelected={pathname === opt.route}
            onClick={push}
          />
        ))
      }
    </OptionList>
    <style jsx>{`
      div {
        background: ${styling.background};
        border-right: 2px solid rgba(0, 0, 0, 0.25);
      }
    `}</style>
  </div>
)

export default connect(
  getCurrentRoute,
  SideNav
)
