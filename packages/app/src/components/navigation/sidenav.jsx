
import {createStructuredSelector} from 'reselect'
import {OptionList, NavOption, IconOption} from '@idd/components'
import {push} from 'raid-navigator'
import get from 'components/icons'

import {connect} from 'signals'
import {getCurrentRoute} from 'core/navigation'

const styling = {
  background: 'rgb(27, 31, 34)'
}

const options = [
  {icon: 'VIEW_COMMS', route: '/comms', text: 'Comms'},
  {icon: 'VIEW_STOCK', route: '/stock', text: 'Stock'},
  {icon: 'VIEW_ENGINEERING', route: '/engineering', text: 'Engineeering'},
  {icon: 'VIEW_PERSONNEL', route: '/personnel', text: 'Personnel'},
  {icon: 'VIEW_EXPLORE', route: '/exploration', text: 'Exploration'}
]

const footerOptions = [
  {icon: 'HOME', route: '/'},
  {icon: 'SETTINGS', route: '/settings'}
]

const SideNav = ({route: {pathname}}) => (
  <div className='root'>
    <section className='main'>
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
    </section>
    <footer>
      <OptionList isHorizontal height={4.4}>
        {
          footerOptions.map(opt => (
            <IconOption
              key={opt.icon}
              icon={opt.icon}
              iconSize={1.6}
              route={opt.route}
              isSelected={pathname === opt.route}
              onClick={push}
              iconClasses='FooterOption'
            />
          ))
        }
      </OptionList>
    </footer>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        background: ${styling.background};
        box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.25) inset;
      }
      .main {
        flex: 1;
      }
      footer :global(.FooterOption) {
        margin: auto;
      }
    `}</style>
  </div>
)

export default connect(
  createStructuredSelector({
    route: getCurrentRoute
  }),
  SideNav
)
